import { Component, OnInit } from '@angular/core';
import { empleado } from './empleado.model';
import { empleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import firebase  from 'firebase/compat/app'
import { loginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo='Listado empleados';
  constructor(
   private notification: ServicioEmpleadosService,
   private empleadoService: empleadosService,
   private loginService: loginService
  ){

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCfQTVuHgLAEeRPCDoxbgrRbueuxlqespg",
      authDomain: "proyectangular-91409.firebaseapp.com",
    })
  }

  estaLogueado(){
    re
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
