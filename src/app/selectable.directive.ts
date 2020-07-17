import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {

  @Input() appSelectable: string[] = [];
  @Output() selectableChanged = new EventEmitter<string>(false);

  readonly CSS_CLASS_SELECTOR  = 'containerSelection';

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   @HostListener('click', ['$event'])
   onClick(event: Event): void {
     const container = this.giveContainerSelector();

     if (container){
      this.renderer.removeChild(this.element.nativeElement.parentNode, container);

     } else {
      const div: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.addClass(div, this.CSS_CLASS_SELECTOR);
      const ul: HTMLUListElement = this.renderer.createElement('ul');
      this.appSelectable.forEach(option => {
       const li: HTMLLIElement = this.renderer.createElement('li');
       li.setAttribute('class', 'selection');
       li.textContent = option;
       li.addEventListener('click', () => {
          this.selectableChanged.emit(option);
          this.element.nativeElement.value = option;
          this.renderer.removeChild(this.element.nativeElement.parentNode, div);
        });

       ul.appendChild(li);
     });

      div.appendChild(ul);
      this.renderer.appendChild(this.element.nativeElement.parentNode, div);
    }
   }

   private giveContainerSelector(): boolean {
     return this.element.nativeElement.parentNode.querySelector('.' + this.CSS_CLASS_SELECTOR);
   }

}
