import { SocialMediaControlComponent } from './P2/control-social-media/control-social-media.component';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { data } from './P2/data';
import { UserCardComponent } from './P2/user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SocialMediaControlComponent, UserCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nuevo_proyecto_angular';
  userList: any[] = [];
  notifications: { platform: string, type: string }[] = [];

  ngOnInit(): void {
    this.initializeUserList();
  }

  private initializeUserList(): void {
    this.userList = Object.entries(data);
    console.log(this.userList);
  }

  handleNewMediaAdded(media: { platform: string, message: string }): void {
    const { platform, message: type } = media;
    this.notifications.push({ platform, type });
    console.log('New media added:', media);
  }
}
