import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'history',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule a las importaciones
  template: `
    <div class="history-container">
      <h3>Operation History:</h3>
      <ul>
        <li *ngFor="let operation of operations">{{ operation }}</li>
      </ul>
    </div>
  `
})
export class HistoryComponent {
  @Input() operations: string[] = [];
}


