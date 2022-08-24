import { Component, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo='Listado empleados';
  constructor(
   private notification: ServicioEmpleadosService,
   private empleadoService: empleadosService
  ){

  }
  ngOnInit(): void {
  }
  empleados = this.empleadoService.empleados
  nombreVar:string = "";
  apellidoVar:string = "";
  cargoVar:string = "";
  salarioVar:number = 0;
  agregarEmp(){
    let miempleado = new empleado(this.nombreVar, this.apellidoVar, this.cargoVar, this.salarioVar);
    this.empleadoService.addUser(miempleado);
  }
}