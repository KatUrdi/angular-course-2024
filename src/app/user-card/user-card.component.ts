import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges{
  @Input() name:string = ''
  @Input() email:string = ''
  @Output() sendData = new EventEmitter()
  password:string=""

  constructor(){
    console.log("user card constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("user card chnaged");
    this.password= this.name+this.email+"password"
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log("user card destroy");
  }
  ngOnInit(): void {
    console.log("User card on init")
    //this.password= this.name+this.email+"password"
  }


  public onSendData(){
    console.log("Sending from child")
  }
}