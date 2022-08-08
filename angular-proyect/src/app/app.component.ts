import { Component } from '@angular/core';
import { empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Listado empleados';
  
  empleados:empleado[]=[
    new empleado("Jose","gomez","Developer",500000),
    new empleado("Andres","lopez","Backend",600000),
    new empleado("Martin","serna","SQL",700000),
    new empleado("Adriana","gomez","Directivo",800000)
  ]
  nombreVar:string = "";
  apellidoVar:string = "";
  cargoVar:string = "";
  salarioVar:number = 0;
}
