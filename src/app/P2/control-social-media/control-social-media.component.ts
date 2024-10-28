import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from './../data';

@Component({
  selector: 'social-media-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-control.component.html',
  styleUrls: ['./social-media-control.component.scss']
})
export class SocialMediaControlComponent {
  platforms = socialNetworks;

  @Output() newMediaAdded = new EventEmitter<{ platform: string; message: string }>();

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

  addNewMedia(platform: string): void {
    const mediaType = ['youtube', 'tiktok'].includes(platform) ? 'video' : 'story';
    const message = `Adding a new ${mediaType} to ${platform}`;

    console.log(message);
    this.newMediaAdded.emit({ platform, message });
  }
}
