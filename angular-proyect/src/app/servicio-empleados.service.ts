import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  mostrarMSG(mensaje: string){
    alert(mensaje)
  }
}
