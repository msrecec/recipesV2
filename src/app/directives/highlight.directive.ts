import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirecive implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appHighlight') highlightColor: string = 'blue';

  /**
   * On the element this reference sits access the style property and subproperty
   * and set it equal to what ever backgroundColor ise set
   *
   */

  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaultColor;
  }

  /**
   * Binds this Directive to a javascript event
   *
   * @param eventData
   */

  @HostListener('click') click(eventData: Event) {
    if (this.backgroundColor === 'transparent') {
      this.backgroundColor = this.highlightColor;
    } else {
      this.backgroundColor = 'transparent';
    }
  }
}
