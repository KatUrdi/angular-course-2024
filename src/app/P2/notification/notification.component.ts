import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() notifications$: BehaviorSubject<any[]>;
  notifications: any[] = [];

  ngOnInit() {
    this.notifications$.subscribe(notifs => {
      this.notifications = notifs;
    });
  }
}
