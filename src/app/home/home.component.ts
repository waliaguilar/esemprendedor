import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { FEATURED_BUSINESSES } from './featured-businesses';

interface Card {
  icon: string;
  chip: string;
  name: string;
  service: string;
  contact: string;
  posterImage: string;
  url?: string;
}

interface Section {
  id: string;
  title: string;
  label: string;
  bgLight: boolean;
  keywords: string;
  cards: Card[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, PromoBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  search = '';
  isSearchFocused = false;
  isLoading = false;
  sections: Section[] = this.createSections();

  promoBanners = [
    {
      title: '¿Querés que tu negocio esté acá?',
      text: 'Queremos que tu emprendimiento crezca y sea conocido. Escribinos y asegurá tu lugar en la Guía de Emprendedores de Espíritu Emprendedor.',
      href: 'https://instagram.com/espirituemprendedor.cpt',
      buttonText: 'Escribinos en Instagram'
    }
  ];

  private createSections(): Section[] {
    const groups = new Map<string, Card[]>();

    for (const business of FEATURED_BUSINESSES) {
      const cards = groups.get(business.category) ?? [];
      cards.push({
        icon: '',
        chip: business.category,
        name: business.name,
        service: '',
        contact: '',
        posterImage: business.image,
        url: business.url
      });
      groups.set(business.category, cards);
    }

    return [...groups.entries()].map(([title, cards], index) => ({
      id: this.sectionId(title),
      title,
      label: `Sección ${String(index + 1).padStart(2, '0')}`,
      bgLight: index % 2 === 1,
      keywords: `${title} ${cards.map(card => card.name).join(' ')}`.toLocaleLowerCase(),
      cards
    }));
  }

  get sortedSections(): Section[] {
    return [...this.sections].sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
  }

  get normalizedQuery(): string {
    return this.search.trim().toLocaleLowerCase();
  }

  private sectionId(title: string): string {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  private matchesText(value: string, query: string): boolean {
    return query.length > 0 && value.toLocaleLowerCase().includes(query);
  }

  private cardMatches(card: Card, query: string): boolean {
    return this.matchesText(card.name, query) || this.matchesText(card.chip, query);
  }

  get visibleSections(): Section[] {
    const query = this.normalizedQuery;
    return this.sections
      .map(section => {
        const sectionMatch = query && section.keywords.includes(query);
        const cards = section.cards.filter(card => !query || sectionMatch || this.cardMatches(card, query));
        return { ...section, cards };
      })
      .filter(section => section.cards.length > 0);
  }

  get resultCount(): number {
    return this.visibleSections.reduce((total, section) => total + section.cards.length, 0);
  }

  trackBySectionId(_index: number, section: Section): string {
    return section.id;
  }

  exploreGuide(): void {
    const firstSection = this.sections[0];
    if (firstSection) this.onSectionSelect(firstSection.id);
  }

  onSectionSelect(sectionId: string, event?: Event): void {
    if (!sectionId) return;
    event?.preventDefault();
    window.history.replaceState(null, '', `#${sectionId}`);
    this.search = '';
    this.isSearchFocused = false;
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      const top = window.scrollY + section.getBoundingClientRect().top - 80;
      window.scrollTo({ top, behavior: 'instant' });
    });
  }

  onSearchFocus(): void {
    this.isSearchFocused = true;
  }

  onSearchBlur(): void {
    setTimeout(() => { this.isSearchFocused = false; }, 200);
  }

  get hasSearchResults(): boolean {
    return this.search.trim().length > 0 && this.resultCount > 0;
  }

  get showEmptyResults(): boolean {
    return this.search.trim().length > 0 && this.resultCount === 0;
  }
}
