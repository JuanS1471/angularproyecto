import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private empleadoService: empleadosService) { }
  empleados = this.empleadoService.empleados
  nombreVar:string = "";
  apellidoVar:string = "";
  cargoVar:string = "";
  salarioVar:number = 0;
  loading !:boolean;
  indice!:number
  ngOnInit(): void {
    this.indice= this.route.snapshot.params['id']
    let empleado:empleado = this.empleadoService.encontrarEmpleado(this.indice);
    this.nombreVar = empleado.nombre;
    this.apellidoVar = empleado.apellido;
    this.cargoVar = empleado.cargo;
    this.salarioVar = empleado.salario;

  }

  volverHome(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate([''])
    }, 2000);
  }

  actualizarEmp(){
    let miempleado = new empleado(this.nombreVar, this.apellidoVar, this.cargoVar, this.salarioVar);
    this.empleadoService.actualizarEmp(this.indice, miempleado);
    this.volverHome();
  }

  eliminarEmp(){
    this.empleadoService.eliminarEmp(this.indice);
    this.volverHome();
  }

}
