import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {
  @Output() caracteristicas = new EventEmitter<string>();

  constructor(
    private notificacion: ServicioEmpleadosService
  ) { }

  ngOnInit(): void {
  }

  agregarcaracteristica(value:string){
    this.notificacion.mostrarMSG("Caracteristica: " + value)
    this.caracteristicas.emit(value);
  }
}
