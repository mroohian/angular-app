import { Directive, Input, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  /* tslint:disable */
  @Input('appHighlight') highlightColor: string;
  /* tslint:enable */

  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = null;
  }
}
