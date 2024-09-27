import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, CommonModule, HistoryComponent],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  box1Value: number = 0;
  box2Value: number = 0;
  operations: string[] = []; // Mantener historial de operaciones

  @Output() sum = new EventEmitter();
  @Output() mul = new EventEmitter();
  @Output() reset = new EventEmitter();

  public onSum() {
    const result = Number(this.box1Value) + Number(this.box2Value);
    this.operations.push(`Sum: ${this.box1Value} + ${this.box2Value} = ${result}`);
    this.sum.emit(result);
  }

  public onMul() {
    const result = Number(this.box1Value) * Number(this.box2Value);
    this.operations.push(`Mul: ${this.box1Value} * ${this.box2Value} = ${result}`);
    this.mul.emit(result);
  }

  public onReset() {
    this.box1Value = 0; // Resetear solo los valores de entrada
    this.box2Value = 0; // Resetear solo los valores de entrada
    // No borrar el historial de operaciones
    this.reset.emit(null);
  }
}

