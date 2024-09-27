import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { HistoryComponent } from './history/history.component';
import { CalculatorComponent } from './calculator/calculator.component';

interface IPerson {
  name: string;
  lastName: string;
  age?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, HistoryComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Cambia a styleUrls

})
export class AppComponent {
  title: number = 10;
  animals: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  person: IPerson = {
    name: 'Juan',
    lastName: 'Perez',
    age: 25
  };
  students: number[] = [1, 2, 3, 4, 5, 6];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = 'hola';

  // Nueva propiedad para almacenar el resultado y el historial de operaciones
  result: number | null = null;
  operations: string[] = [];

  constructor() {
    const { name, age } = this.person;
    console.log('desestructuración: ', name, age);
    let both = [...this.students, ...this.parents];
    console.log('spread operator:', both);
    console.log('REST operator:', this.sum(2, 4, 6));

    console.log('Nullish Coalesing:', this.var2 ?? this.var3);
    console.log('OR:', this.var2 || this.var1);

    //console.log('subtract ', this.subtract(8, 4));
    //console.log('MAP:', this.animals.map((animal: string) => (animal + 'new')));
    //console.log('FOREACH:', this.animals.forEach((animal) => (animal + 'new')));
    //console.log('FIND', this.animals.find((animal) => animal === 'z'));
    //console.log('FILTER', this.animals.filter((animal) => animal === 'z'));
    //console.log('INDEXOF', this.animals.indexOf('c'));
  }

  public sum(...persons: number[]) {
    return persons.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      10
    );
  }

  public sum2(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray(): void {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
      //console.log('person =', persons[i]);
    }
  }

  public receiveData(data: any) {
    console.log('Print in father component: ', data);
  }

  // Métodos para manejar los resultados de la calculadora y añadirlos al historial
  public onResult(event: number | null) {
    if (event !== null) {
      this.result = event;
      this.operations.push(`Result: ${event}`);
    }
  }

  public onReset() {
    this.result = null;
    this.operations.push('Calculator reset');
  }
}
