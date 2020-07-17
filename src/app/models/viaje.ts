export enum ViajeEstado {
    Abierto = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export interface Viaje2 {
    nombreDelViaje: string;
    tipoDeViaje: string;
    destinoViaje: string;
    duracionViaje: string;
    visible: boolean;
    estado: ViajeEstado;
}

// export class Viaje {
//     nombreDelViaje: string;
//     tipoDeViaje: string;
//     destinoViaje: string;
//     duracionViaje: string;
//     constructor(item?: any){
//         this.nombreDelViaje = item && item.nombreDelViaje ? item.nombreDelViaje : 'Sin especificar';
//         this.tipoDeViaje = item?.tipoDeViaje || 'Sin especificar';
//         this.destinoViaje = item?.destinoViaje || 'Sin definir';
//         this.duracionViaje = item?.duracionViaje || 'Sin duracion';
//     }
// }
