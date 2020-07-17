import { Directive, Input, ElementRef, Renderer2, OnInit, Output } from '@angular/core';
import { ViajeEstado } from './models/viaje';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements OnInit {

  @Input('appStatus') status: number;
  
  // Declaro aqui el ElementRef, que es el que nos apunta a la etiqueta HTML
  // Declaro tambien el renderer, que es el que nos renderiza en Angular
  // en vez de atacar directamente al elemento
  constructor( private element: ElementRef, private renderer: Renderer2 ) {
  // El constructor preferentemente ira lo mas ligero posible
  }

  // Vamos a cargar aqui la directiva, ya que se trata de mostrar un icono u 
  // otro en funcion del estado
  ngOnInit(): void {
    const span: HTMLSpanElement = this.element.nativeElement.querySelector('li > span');
    this.renderer.addClass(span, 'fa');
    this.renderer.addClass(span, this.setIconStatus(this.status));

    this.renderer.setStyle(this.element.nativeElement, 'color',
     this.setColorStatus(this.status));
  }


  setIconStatus(status: ViajeEstado): string {
    switch (status) {
      case ViajeEstado.Abierto:
        return 'fa-lock-open';
      case ViajeEstado.Cerrado:
        return 'fa-lock';
      case ViajeEstado.Cancelado:
        return 'fa-window-close';
      case ViajeEstado.Postpuesto:
        return 'fa-clock';
    }

  }


  setColorStatus(state: any): string {
    switch (state) {
          case 1:
            return 'blue';
          case 2:
            return 'green';
          case 3:
            return 'red';
          case 4:
            return 'yellow';
        }
  }

  // selectIconStatus(): string {
  //   switch (this.status) {
  //     case 'Abierto':
  //       return 'faLockOpen';
  //     case 'Cerrado':
  //       return 'faLock';
  //     case 'Cancelado':
  //       return 'faWindowClose';
  //     case 'Postpuesto':
  //       return 'faClock';
  //      default:
  //       break;
  //   }


  

}
