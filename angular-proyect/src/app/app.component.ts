import { Component } from '@angular/core';
import { empleado } from './empleado.model';
import { empleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Listado empleados';
  constructor(
   private notification: ServicioEmpleadosService,
   private empleadoService: empleadosService
  ){

  }
  empleados = this.empleadoService.empleados
  nombreVar:string = "";
  apellidoVar:string = "";
  cargoVar:string = "";
  salarioVar:number = 0;
  agregarEmp(){
    let miempleado = new empleado(this.nombreVar, this.apellidoVar, this.cargoVar, this.salarioVar);
    this.notification.mostrarMSG("Nombre: " + miempleado.nombre);
    this.empleadoService.addUser(miempleado);
  }

}
