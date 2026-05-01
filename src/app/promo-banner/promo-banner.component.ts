import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.css']
})
export class PromoBannerComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() href = '';
  @Input() buttonText = '';
}
