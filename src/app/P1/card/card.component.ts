import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  selectedTab: number = 1;

  selectTab(tab: number): void {
    this.selectedTab = tab;
  }
}