import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Directivas';
  mensaje="";
  registrado !: boolean;
  entradas !: any;

  constructor(){
    this.entradas=[
      {
        titulo:"java"
      },
      {
        titulo:"python"
      },
      {
        titulo:"C++"
      },
      {
        titulo:"TS"
      },
    ]
  }


  registrarUser(){
    this.registrado = true;
    this.mensaje = "Se ha registrado"
  }
}
