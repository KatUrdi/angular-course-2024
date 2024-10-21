import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedModule } from "../shared/shared.module";

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [FormsModule, CommonModule, SharedModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked{

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  @ViewChild('buttonTest',{static: false} ) buttonTest!:ElementRef //lo ponemos en false para que no haya problema si no esta, si esta en true se revisa q este
  @ViewChild('buttonShow',{static: true} ) buttonShow!:ElementRef 

  password:string=""

  showButton:boolean= true
  subscription: Subscription = new Subscription()
  constructor(private activateRouter: ActivatedRoute){
    this.subscription.add(
      this.activateRouter.params.subscribe((params) => {
        console.log("PARAMS:", params)
      })
    )
    
    console.log("SNAPSHOT:", this.activateRouter.snapshot.params)
    //console.log("user card constructor")
  }
  ngAfterViewChecked(): void {
    //console.log("user card after view checked");
  }
  ngAfterContentChecked(): void {
    //console.log("user card after content checked");
  }
  ngAfterViewInit(): void { //solamente ingresa una vez!!! nunca mas
    /*console.log("user card after view init");
    console.log("Native element", this.buttonTest)
    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = "MODIFIED SEND DATA"
    }*/
  }
  ngAfterContentInit(): void {
    //console.log("user card after content init");

  }
  ngOnChanges(changes: SimpleChanges): void {
    /*console.log("user card chnaged");*/
    this.password= this.name+this.email+"password"
    /*console.log(changes)*/
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    //console.log("user card destroy");
  }
  ngOnInit(): void {
    //console.log("User card on init")

    //this.buttonTest.nativeElement.textContent = "modified send data"

    this.buttonShow.nativeElement.textContent = "button show"
    this.password= this.name+this.email+"password"
  }

  ngDoCheck():void{
    //console.log("Do check user card")
  }

  public onSendData(){
    console.log("Sending from child")
    this.sendData.emit('Hi from child component')
  }
}