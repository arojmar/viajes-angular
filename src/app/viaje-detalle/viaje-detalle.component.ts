import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje2, ViajeEstado } from '../models/viaje';

@Component({
  selector: 'app-viaje-detalle',
  templateUrl: './viaje-detalle.component.html',
  styleUrls: ['./viaje-detalle.component.scss']
})
export class ViajeDetalleComponent implements OnInit {

  // @Input() nombreDelViaje: string;
  // @Input() tipoDeViaje: string;
  // @Input() destinoViaje: string;
  // @Input() duracionViaje: string;
  @Input() viaje: Viaje2;
  status: string;
  @Input() opciones: string[] = [];

  // Se coloca el false como predeterminado, para que no emita
  // nada, en la primera carga
  @Output() mostrarViaje = new EventEmitter<string>(false);
  viajeEstado = ViajeEstado;



  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.mostrarViaje.emit('SETTIME ' + this.viaje.nombreDelViaje);
    // }, 2000);
    this.status = ViajeEstado[this.viaje.estado];
  }

  showTrips(): void {
    this.mostrarViaje.emit('ESTE ES EL ' + this.viaje.nombreDelViaje);
  }

  selectIconStatus(num: number): string {
    switch (num) {
      case 1:
        return 'lock-open';
      case 2:
        return 'lock';
      case 3:
        return 'window-close';
      case 4:
        return 'clock';
       default:
        break;
    }
  }

  textChanged(text: string): void {
    this.viaje.tipoDeViaje = text;
  }

}
