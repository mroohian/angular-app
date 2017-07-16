import { Directive, Input, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;
  }
}
