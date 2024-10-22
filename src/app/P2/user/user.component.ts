import { Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() user: any;  

 
  socialNetworks = [
    { name: 'facebook', premium: false },
    { name: 'tiktok', premium: true },
    { name: 'youtube', premium: false },
    { name: 'instagram', premium: false },
    { name: 'whatsapp', premium: true }
  ];

  
  subscriptions: string[] = [];

  
  notifications$ = new BehaviorSubject<any[]>([]);

  ngOnChanges() {
    
    if (this.user) {
      this.subscriptions = this.user.subscriptions;
      this.notifications$.next(this.user.notifications);
    }
  }

  subscribe(network: string, isPremium: boolean) {
    if (isPremium && this.user.subscriptionType !== 'Premium') {
      alert('Solo los usuarios premium pueden suscribirse a TikTok o WhatsApp.');
      return;
    }
    if (!this.subscriptions.includes(network)) {
      this.subscriptions.push(network);
    }
  }

  unsubscribe(network: string) {
    this.subscriptions = this.subscriptions.filter(sub => sub !== network);
  }

  closeAccount() {
    this.user.active = false;
  }
}
