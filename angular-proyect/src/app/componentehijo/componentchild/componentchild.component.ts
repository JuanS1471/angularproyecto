import { Component, Input, OnInit } from '@angular/core';
import { empleado } from 'src/app/empleado.model';
import { empleadosService } from 'src/app/empleados.service';

@Component({
  selector: 'app-componentchild',
  templateUrl: './componentchild.component.html',
  styleUrls: ['./componentchild.component.css']
})
export class ComponentchildComponent implements OnInit {
  @Input()
  empleados:empleado[]=[
  ]
  constructor(private empleadoService: empleadosService) { }

  ngOnInit(): void {
  }

  arrayCarc:Array<string> = []

  eliminar(indice:number){
    this.empleadoService.eliminarEmp(indice);
  }

  agregarCarac(car: string){
    this.arrayCarc.push(car)
  }

}
