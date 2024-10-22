import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from '../data P2';

@Component({
  selector: 'app-social-networks',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  platforms = socialNetworks;  

  platformColors: { [key: string]: string } = {
    youtube: '#FF0000',
    facebook: '#4267B2',
    tiktok: '#000000',
    instagram: '#C13584',
    whatsapp: '#25D366'
  };

  getPlatformColor(platform: string): string {
    return this.platformColors[platform.toLowerCase()] || '#FFFFFF'; 
  }

  addNewVideo(platform: string) {
    console.log("Adding a new video to ${platform}");
    
  }
}