import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appInputt]'
})
export class InputtDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.color = "white";
    this.colo();
   }
    

   private colo() {
    this.el.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "green";

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "blue";
  }


}
