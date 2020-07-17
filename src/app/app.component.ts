import { Component } from '@angular/core';
import { Viaje2, ViajeEstado } from './models/viaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viajes: Viaje2[] = [];
  //opciones = ['categoria1', 'categoria2', 'categoria3', 'categoria4'];
  opciones: string[] = [];

  constructor(){
    this.viajes.push({
      nombreDelViaje: 'Semana Santa en Egipto',
      tipoDeViaje: 'Familiar',
      destinoViaje: 'Egipto',
      duracionViaje: '15 dias',
      visible: true,
      estado: 1
    });
    this.viajes.push({
      nombreDelViaje: 'Verano en Noruega',
      tipoDeViaje: 'Crucero',
      destinoViaje: 'Fiordos Noruegos',
      duracionViaje: '10 dias',
      visible: true,
      estado: ViajeEstado.Postpuesto
    });
    this.viajes.push({
      nombreDelViaje: 'Otoño en Maldivas',
      tipoDeViaje: 'Buceo',
      destinoViaje: 'Maldivas',
      duracionViaje: '7 dias',
      visible: false,
      estado: ViajeEstado.Cerrado
    });

    this.opciones = this.viajes.map(x => x.tipoDeViaje);
  }

  btnViajesClicked(): void{
    alert(`La aplicacion tiene un total de ${this.viajes.length} viajes`);
  }

  mostrarInfo(message: string): void {
    alert(message);
  }

  mostrarOcultar(viaje: Viaje2): void{
    viaje.visible = !viaje.visible;
  }

}
