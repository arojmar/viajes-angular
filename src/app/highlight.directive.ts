import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') background: string;
  @Input() color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  //  element.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void{
    // this.element.nativeElement.style.backgroundColor = this.background  || 'yellow';
    // this.element.nativeElement.style.color = this.color || 'white';

    // this.renderer.setStyle(this.element.nativeElement, 'background-color', this.background  || 'yellow');
    // this.renderer.setStyle(this.element.nativeElement, 'color', this.color || 'white');
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.background  || 'yellow');
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color || 'white');

    const span: HTMLSpanElement = this.renderer.createElement('span');
    span.setAttribute('id', 'spanTxt');
    span.textContent = 'Estoy sobre el elemento con la directiva';

    this.renderer.appendChild(this.element.nativeElement, span);
    }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', null);
    this.renderer.setStyle(this.element.nativeElement, 'color', null);

    const span = this.element.nativeElement.querySelector('#spanTxt');
    if (span){
      this.renderer.removeChild(this.element.nativeElement, span);
    }
  }
}
