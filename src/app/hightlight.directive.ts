import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  _el:HTMLElement;
  @Input() setColor = "yellow"
  constructor(el:ElementRef) {
    this._el = el.nativeElement;
   }

   @HostListener('mouseenter') onmouseenter(){
    console.log(this.setColor);
    this._el.style.backgroundColor = this.setColor;
   }
}
