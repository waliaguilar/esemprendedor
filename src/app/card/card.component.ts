import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() icon = '';
  @Input() chip = '';
  @Input() name = '';
  @Input() service = '';
  @Input() contact = '';
  @Input() featured = false;
  @Input() backgroundImage = '';
  @Input() highlightQuery = '';

  constructor(private sanitizer: DomSanitizer) {}

  get cardBackgroundImage(): string {
    return this.backgroundImage;
  }

  highlightText(value: string): SafeHtml {
    const text = value || '';
    const query = this.highlightQuery?.trim();

    if (!query) {
      return this.sanitizer.bypassSecurityTrustHtml(this.escapeHtml(text));
    }

    const escaped = this.escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const highlighted = escaped.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<mark>$1</mark>');

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
