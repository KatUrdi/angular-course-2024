import { Directive, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[ngCreateHtml]',
  standalone: true
})
export class CreateHtmlDirective implements OnInit, OnChanges {
  @Input() 
  set ngCreateHtml(value:boolean){
      if(value){
        this.viewContainer.createEmbeddedView(this.templateRef)
        this.sendMessage.emit('Se creo el html')
      } else{
        this.viewContainer.clear()
        this.sendMessage.emit('No se creo el html')
      }
  }
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>()
  constructor(private viewContainer:ViewContainerRef, private templateRef: TemplateRef<any>) { }
  ngOnChanges(changes: SimpleChanges): void {
    /*if(changes['ngCreateHtml']){
      if(this.ngCreateHtml){
        this.viewContainer.createEmbeddedView(this.templateRef)
      } else{
        this.viewContainer.clear()
      }
    }*/
  }
  ngOnInit(): void {
    /*if(this.ngCreateHtml){
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else{
      this.viewContainer.clear()
    }*/
  }
}