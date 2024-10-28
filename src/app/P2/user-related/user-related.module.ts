import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SocialMediaCardComponent } from '../social-media-card/social-media-card.component';



@NgModule({
  declarations: [NotificationsComponent, UserDataComponent],
  imports: [
    CommonModule, SocialMediaCardComponent
  ],
  exports: [NotificationsComponent, UserDataComponent]
})
export class UserRelatedModule { }