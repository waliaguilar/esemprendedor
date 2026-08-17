import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JobOffer } from '../models/job-offer.model';
import { MOCK_JOB_OFFERS } from './job-offers.mock';

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  allOffers: JobOffer[] = [];
  filteredOffers: JobOffer[] = [];
  isLoading = false;
  error: string | null = null;

  search = '';
  selectedType = '';
  selectedCategory = '';

  types = [
    { value: '', label: 'Todos los tipos' },
    { value: 'full-time', label: 'Tiempo completo' },
    { value: 'part-time', label: 'Medio tiempo' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'internship', label: 'Pasantía' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers(): void {
    this.allOffers = MOCK_JOB_OFFERS;
    this.applyFilters();
  }

  applyFilters(): void {
    const q = this.search.toLowerCase().trim();
    this.filteredOffers = this.allOffers.filter(o => {
      const matchesSearch = !q ||
        o.title.toLowerCase().includes(q) ||
        o.company.toLowerCase().includes(q) ||
        o.category.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q);
      const matchesType = !this.selectedType || o.type === this.selectedType;
      const matchesCategory = !this.selectedCategory ||
        o.category.toLowerCase() === this.selectedCategory.toLowerCase();
      return matchesSearch && matchesType && matchesCategory;
    });
  }

  get categories(): string[] {
    return [...new Set(this.allOffers.map(o => o.category))].sort();
  }

  typeLabel(type: JobOffer['type']): string {
    return this.types.find(t => t.value === type)?.label ?? type;
  }

  clearFilters(): void {
    this.search = '';
    this.selectedType = '';
    this.selectedCategory = '';
    this.applyFilters();
  }
}
