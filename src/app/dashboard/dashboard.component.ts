import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { SectionService } from '../services/section.service';
import { Card, CreateCard, UpdateCard } from '../models/card.model';
import { Section } from '../models/section.model';

type ToastType = 'success' | 'error';

interface Toast {
  message: string;
  type: ToastType;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: Card[] = [];
  sections: Section[] = [];

  isLoading = false;
  isSaving = false;
  isDeleting = false;

  filterSectionId: number | null = null;
  searchQuery = '';

  showModal = false;
  isEditMode = false;
  editingCardId: number | null = null;

  showDeleteModal = false;
  deletingCard: Card | null = null;

  toast: Toast | null = null;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  form: FormGroup;

  constructor(
    private cardService: CardService,
    private sectionService: SectionService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      sectionId: [null, [Validators.required]],
      icon: ['', [Validators.required, Validators.maxLength(10)]],
      chip: ['', [Validators.required, Validators.maxLength(100)]],
      name: ['', [Validators.required, Validators.maxLength(150)]],
      service: ['', [Validators.required, Validators.maxLength(500)]],
      contact: ['', [Validators.required, Validators.maxLength(300)]],
      featured: [false],
      backgroundImage: [''],
      keywords: ['']
    });
  }

  ngOnInit(): void {
    this.loadSections();
    this.loadCards();
  }

  // ─── Data Loading ─────────────────────────────────────────────────────────

  loadSections(): void {
    this.sectionService.getAll().subscribe({
      next: sections => { this.sections = sections; },
      error: () => { this.showToast('Error al cargar las secciones.', 'error'); }
    });
  }

  loadCards(): void {
    this.isLoading = true;
    const sectionId = this.filterSectionId ?? undefined;
    this.cardService.getAll(sectionId).subscribe({
      next: cards => { this.cards = cards; this.isLoading = false; },
      error: () => { this.showToast('Error al cargar las tarjetas.', 'error'); this.isLoading = false; }
    });
  }

  // ─── Computed ─────────────────────────────────────────────────────────────

  get filteredCards(): Card[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.cards;
    return this.cards.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.chip.toLowerCase().includes(q) ||
      c.service.toLowerCase().includes(q) ||
      c.contact.toLowerCase().includes(q)
    );
  }

  getSectionTitle(sectionId: number): string {
    return this.sections.find(s => s.id === sectionId)?.title ?? `Sección ${sectionId}`;
  }

  // ─── Filters ──────────────────────────────────────────────────────────────

  onSectionFilterChange(): void {
    this.loadCards();
  }

  clearFilters(): void {
    this.filterSectionId = null;
    this.searchQuery = '';
    this.loadCards();
  }

  // ─── Modal: Create ────────────────────────────────────────────────────────

  openCreateModal(): void {
    this.isEditMode = false;
    this.editingCardId = null;
    this.form.reset({ featured: false, sectionId: this.sections[0]?.id ?? null });
    this.showModal = true;
  }

  // ─── Modal: Edit ──────────────────────────────────────────────────────────

  openEditModal(card: Card): void {
    this.isEditMode = true;
    this.editingCardId = card.id;
    this.form.patchValue({
      sectionId: card.sectionId,
      icon: card.icon,
      chip: card.chip,
      name: card.name,
      service: card.service,
      contact: card.contact,
      featured: card.featured,
      backgroundImage: card.backgroundImage ?? '',
      keywords: card.keywords ?? ''
    });
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.form.reset();
  }

  // ─── Save (Create / Update) ───────────────────────────────────────────────

  saveCard(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;
    const payload: CreateCard | UpdateCard = {
      sectionId: Number(value.sectionId),
      icon: value.icon.trim(),
      chip: value.chip.trim(),
      name: value.name.trim(),
      service: value.service.trim(),
      contact: value.contact.trim(),
      featured: !!value.featured,
      backgroundImage: value.backgroundImage?.trim() || undefined,
      keywords: value.keywords?.trim() || undefined
    };

    this.isSaving = true;

    if (this.isEditMode && this.editingCardId !== null) {
      this.cardService.update(this.editingCardId, payload as UpdateCard).subscribe({
        next: () => {
          this.isSaving = false;
          this.closeModal();
          this.loadCards();
          this.showToast('Tarjeta actualizada correctamente.', 'success');
        },
        error: () => {
          this.isSaving = false;
          this.showToast('Error al actualizar la tarjeta.', 'error');
        }
      });
    } else {
      this.cardService.create(payload as CreateCard).subscribe({
        next: () => {
          this.isSaving = false;
          this.closeModal();
          this.loadCards();
          this.showToast('Tarjeta creada correctamente.', 'success');
        },
        error: (err) => {
          this.isSaving = false;
          const msg = err?.error?.message ?? 'Error al crear la tarjeta.';
          this.showToast(msg, 'error');
        }
      });
    }
  }

  // ─── Delete ───────────────────────────────────────────────────────────────

  confirmDelete(card: Card): void {
    this.deletingCard = card;
    this.showDeleteModal = true;
  }

  cancelDelete(): void {
    this.deletingCard = null;
    this.showDeleteModal = false;
  }

  executeDelete(): void {
    if (!this.deletingCard) return;
    this.isDeleting = true;
    this.cardService.delete(this.deletingCard.id).subscribe({
      next: () => {
        this.isDeleting = false;
        this.showDeleteModal = false;
        this.deletingCard = null;
        this.loadCards();
        this.showToast('Tarjeta eliminada correctamente.', 'success');
      },
      error: () => {
        this.isDeleting = false;
        this.showToast('Error al eliminar la tarjeta.', 'error');
      }
    });
  }

  // ─── Toast ────────────────────────────────────────────────────────────────

  showToast(message: string, type: ToastType): void {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toast = { message, type };
    this.toastTimer = setTimeout(() => { this.toast = null; }, 4000);
  }

  dismissToast(): void {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toast = null;
  }

  // ─── Form Helpers ─────────────────────────────────────────────────────────

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!ctrl && ctrl.invalid && ctrl.touched;
  }
}