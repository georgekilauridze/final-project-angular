import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  @Input() defaultColor!: string;
  @HostListener('mouseenter') onMouseEnter() {
     this.el.nativeElement.style.background = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = '';
  }
  constructor(private el: ElementRef) { 
   
    
  }

}