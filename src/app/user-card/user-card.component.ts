import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit{
  @Input() name:string = ''
  @Input() email:string = ''
  @Output() sendData = new EventEmitter()
  @ViewChild('buttonTest') buttonTest!:ElementRef
  password:string=""
  showButton:boolean= false

  constructor(){
    console.log("user card constructor")
  }

  ngAfterViewInit(): void {
    console.log("user card after view init");
    console.log("Native element", this.buttonTest)
    this.buttonTest.nativeElement.textContent = "MODIFIED SEND DATA"
  }

  ngAfterContentInit(): void {
    console.log("user card after content init");
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

  ngDoCheck():void{
      console.log("Do check user card")
    }
  public onSendData(){
    console.log("Sending from child")
  }
}