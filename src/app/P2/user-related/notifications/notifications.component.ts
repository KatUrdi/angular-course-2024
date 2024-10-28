import { Component, Input } from '@angular/core';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  @Input() notifications: { platform: string; type: string }[] = [];

  addNotification(newNotification: { platform: string; type: string }): void {
    this.notifications = [...this.notifications, newNotification];
  }
}
