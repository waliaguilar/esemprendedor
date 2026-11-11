import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SimpleCardItem {
  name: string;
  service: string;
  contact: string;
  keywords?: string;
}

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent {
  @Input() name = '';
  @Input() service = '';
  @Input() contact = '';
  @Input() items: SimpleCardItem[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  formatText(value: string): SafeHtml {
    const text = (value || '').replace(/\n/g, '<br>');
    const escaped = this.escapeHtml(text);
    const linked = escaped.replace(/\bIg\s+@([A-Za-z0-9._]+)/gi, (_, username: string) =>
      `Ig <a href="https://www.instagram.com/${encodeURIComponent(username)}/" target="_blank" rel="noopener noreferrer">@${username}</a>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(linked.replace(/&lt;br&gt;/g, '<br>'));
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
