import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyects-component',
  templateUrl: './proyects-component.component.html',
  styleUrls: ['./proyects-component.component.css']
})
export class ProyectsComponentComponent implements OnInit {
  constructor(private router:Router,private empleadoService: empleadosService) { }
  empleados = this.empleadoService.empleados
  nombreVar:string = "";
  apellidoVar:string = "";
  cargoVar:string = "";
  salarioVar:number = 0;
  loading !:boolean;

  ngOnInit(): void {
  }

  volverHome(){
    this.agregarEmp();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate([''])
    }, 2000);
  }

  agregarEmp(){
    let miempleado = new empleado(this.nombreVar, this.apellidoVar, this.cargoVar, this.salarioVar);
    this.empleadoService.addUser(miempleado);
  }

}
