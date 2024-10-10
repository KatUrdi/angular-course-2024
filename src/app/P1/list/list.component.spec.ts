import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Corrige el nombre a styleUrls
})
export class ListComponent {
  @Input() list: any[] = []; 
  @Output() sendData = new EventEmitter()

  public sendPersonToParent(data: any): void {
    console.log('Sending person...');
    this.sendData.emit(data);
  }
}
