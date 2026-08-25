import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { SimpleCardComponent } from '../simple-card/simple-card.component';
import { SectionService } from '../services/section.service';
import { Section, SimpleCardItem } from '../models/section.model';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, PromoBannerComponent, SimpleCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = '';
  isSearchFocused = false;
  isLoading = false;
  error: string | null = null;


  get sortedSections() {
    return [...this.sections].sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
  }

  promoBanners = [
    {
      title: '¿Querés que tu negocio esté acá?',
      text: 'Queremos que tu emprendimiento crezca y sea conocido. Escribinos y asegurá tu lugar en la Guía de Emprendedores de Espíritu Emprendedor.',
      href: 'https://instagram.com/espirituemprendedor.cpt',
      buttonText: 'Escribinos en Instagram'
    }
  ];

  sections: Section[] = [];

  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.loadSections();
  }

  loadSections(): void {
    this.isLoading = true;
    this.error = null;
    this.sectionService.getAll().subscribe({
      next: sections => { this.sections = sections; this.isLoading = false; },
      error: () => { this.error = 'No se pudieron cargar las secciones.'; this.isLoading = false; }
    });
  }

  get normalizedQuery(): string {
    return this.search.trim().toLowerCase();
  }

  private matchesText(value: string, query: string): boolean {
    return query.length > 0 && value.toLowerCase().includes(query);
  }

  private cardMatches(card: Card, query: string): boolean {
    return (
      this.matchesText(card.name, query) ||
      this.matchesText(card.service, query) ||
      this.matchesText(card.contact, query) ||
      this.matchesText(card.chip, query)
    );
  }

  private simpleCardMatches(item: SimpleCardItem, query: string): boolean {
    return this.matchesText(item.name, query) || this.matchesText(item.service, query);
  }

  get visibleSections() {
    const query = this.normalizedQuery;
    return this.sections
      .map(section => {
        const sectionMatch = !!query && section.keywords.includes(query);
        const cards = section.cards.filter(card => !query || sectionMatch || this.cardMatches(card, query));
        const simpleCards = section.simpleCards?.filter(item => !query || sectionMatch || this.simpleCardMatches(item, query)) ?? [];
        return { ...section, cards, simpleCards };
      })
      .filter(section => section.cards.length > 0 || section.simpleCards.length > 0);
  }

  get resultCount(): number {
    return this.visibleSections.reduce((total, section) => total + section.cards.length + (section.simpleCards?.length ?? 0), 0);
  }

  onSectionSelect(sectionId: string) {
    if (!sectionId) return;
    this.search = '';
    this.isSearchFocused = false;
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  onSearchFocus() { this.isSearchFocused = true; }

  onSearchBlur() {
    setTimeout(() => { this.isSearchFocused = false; }, 200);
  }

  get hasSearchResults(): boolean {
    if (!this.search.trim()) return false;
    return this.resultCount > 0;
  }

  get showEmptyResults(): boolean {
    return this.search.trim().length > 0 && this.resultCount === 0;
  }

  get featuredCards(): Card[] {
    return this.sections.flatMap(s => s.cards.filter(c => c.featured)).slice(0, 2);
  }

  get displayedFeaturedCards(): Card[] {
    if (this.search) return this.visibleSections.flatMap(s => s.cards.filter(c => c.featured));
    return this.featuredCards;
  }
}