import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'social-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.scss'] 
})
export class SocialMediaCardComponent {
  @Input() code = 0;
  @Input() name = '';
  @Input() added = false;

  @Output() sendData = new EventEmitter<{ code: number; operation: number }>();

  private platformColors: Record<string, string> = {
    youtube: 'red',
    facebook: 'blue',
    tiktok: 'purple',
    instagram: 'orange',
    whatsapp: 'green'
  };

  getPlatformColor(platform: string): string {
    return this.platformColors[platform.toLowerCase()] || 'default-color'; 
  }

  addSocialMedia(): void {
    this.added = true;
  }

  sendCodeToParent(val: number): void {
    console.log(`Sending code.....${this.code}`);
    this.sendData.emit({ code: this.code, operation: val });
  }
}
