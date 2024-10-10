import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'] // Corrige 'styleUrl' a 'styleUrls'
})
export class ItemComponent {
  @Input() object: any = '';
  @Input() object_key: any = '';
  @Input() type: number = 0;

  @Output() sendData = new EventEmitter();

  public showingTabs: boolean = false; // Controla la visualización de las pestañas
  public activeTab: string = 'personal'; // Controla qué pestaña está activa

  public sendPersonToParent(val: number) {
    console.log("Sending person...");
    this.sendData.emit({ key: this.object_key, operation: val });
  }

  public showTabs() {
    this.showingTabs = true; // Muestra las pestañas
    this.activeTab = 'personal'; // Establece la pestaña activa por defecto
  }

  public setActiveTab(tab: string) {
    this.activeTab = tab; // Cambia la pestaña activa
  }
}
