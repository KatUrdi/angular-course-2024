import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { PersonComponent } from './person/person.component';

interface IPerson{
  name:string,
  lastName:string,
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryComponent, CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  result:number = 0;
  history: { action: string, result: number }[] = [];
  title:number = 20;
  subtitle:number=2;

  animals:string[]=["a","b","c","d","e","f","g"]

  person: IPerson = {
    name:"ivan",
    lastName:"perez",
    age:25
  }

  females:number=0
  males:number=0
  discounts:number=0
  persons:any[]=[{gender:0,name:"carla ayala",age:23},{gender:1,name:"Aniceto Arce",age:12},{gender:0,name:"Luisa Armentia",age:43}]

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9]

  var1=0
  var2=null
  var3='hola'

  userCardCreated:boolean=true //tareaaa
  users=[{name:"abc", email:"algo@gmail.com"},{name:"hola", email:"otro@gmail.com"}]
  selectedUser:any=this.users[0]

  constructor(){

    const {name, age} = this.person
    console.log("DESESTRUCTURACION: ", name,age)

    let both = [...this.students, ...this.parents]
    console.log('SPRED OPERATOR: ',both)

    console.log('REST OPERATOR: ', this.sum(2,4,6,5))

    console.log('Nullish Coalesing: ', this.var2 ?? this.var3)

    console.log('OR: ', this.var2 || this.var1) //se va a saltar al segundo si el primero es 0,null,undefned

    /*console.log("subtract: ", this.subtract(8,4))
    console.log("MAP:", this.animals.map((animal) => (animal +'new')))
    console.log("FOR EACH:", this.animals.forEach((animal) => (animal +'new')))
    console.log("FIND:", this.animals.forEach((animal) => animal === 'z'))
    console.log("FILTER:", this.animals.filter((animal) => animal === 'c'))
    console.log("INDEXOF:", this.animals.indexOf('z'))*/

    this.calculateTotals()

  }

  public calculateTotals() {
    this.females = this.persons.filter(p => p.gender === 0).length;
    this.males = this.persons.filter(p => p.gender === 1).length;
    this.discounts = this.persons.filter(p => p.age > 18).length;
  }

  public deleteDiscounts() {
    this.persons = this.persons.filter(p => p.age <= 18);
    this.calculateTotals();
  }

  public receiveData(data:any){
    console.log('Print in father component: ', data)
  }

  public onResult(event:any){
    this.result = event.result ?? 0;

    if (event !== undefined) {
      this.history.push({ action: event.action, result: event.result });
    }
  }

  public sum(...persons:number[]){
    //return persons[0]+persons[1]
    return persons.reduce((accumulator, currentValue) => (accumulator+currentValue))
  }

  public sum2(num1:number, num2:number): number{
    return num1+num2;
  }

  private subtract(num1:number, num2:number): number{
    return num1-num2;
  }

  public getArray(){
    const persons:number[] = [1,2,3,4,5,6]
    for(let i =0; i < persons.length; i++){
      if(persons[i]%2 == 0){
        //console.log("person = ", persons[i])
      }
    }
  }


}