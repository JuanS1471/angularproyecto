import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {
  @Output() caracteristicas = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarcaracteristica(value:string){
    this.caracteristicas.emit(value);
  }
}
