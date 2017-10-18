import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: String;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
/*    console.log(this.element);
    const { nativeElement } = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'blue')
   // this.element.nativeElement.style.background = 'red';
    nativeElement.style.textAlign = 'center'; // плохой подход
   // nativeElement.style.color = 'white';
    this.renderer.addClass(nativeElement, 'text-color');*/
    const { nativeElement } = this.element;
    nativeElement.style.textAlign = 'center'; // плохой подход
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    const { nativeElement } = this.element;
  //  this.renderer.setStyle(nativeElement, 'background-color', 'blue');
   this.renderer.addClass(nativeElement, 'text-color');
    this.background = 'blue';
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    const { nativeElement } = this.element;
    this.renderer.removeClass(nativeElement, 'text-color');
    this.background = 'transparent';
  }
}
