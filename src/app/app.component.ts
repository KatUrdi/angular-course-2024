import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialNetworksComponent } from './P2/social-networks/social-networks.component';
import { UserComponent } from './P2/user/user.component';
import { data } from './P2/data P2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SocialNetworksComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = Object.values(data);
}