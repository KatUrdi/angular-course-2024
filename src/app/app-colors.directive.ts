import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
@Directive({
  selector: '[ngColors]',
  standalone: true
})
export class AppColorsDirective {
  @Input() ngColors!:string;
  @Input() defaultColor!:string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter<string>()
  @Output() colorChangeDouble: EventEmitter<string> = new EventEmitter<string>()
  @HostListener('click') onClick(){
    this.element.nativeElement.style.backgroundColor=this.ngColors
    this.colorChange.emit('current color is: '+ this.ngColors)
  }
  @HostListener('dblclick') onDoubleClick(){
    this.element.nativeElement.style.backgroundColor=this.ngColors
    this.colorChangeDouble.emit('double, current color is: '+ this.ngColors)
  }
  @HostListener('mouseleave') onBlur(){
    this.ngColors=this.defaultColor
  }
  constructor(private element:ElementRef) { }
}