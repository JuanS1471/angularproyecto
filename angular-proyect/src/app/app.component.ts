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

  registrarUser(){
    this.registrado = true;
    this.mensaje = "Se ha registrado"
  }
}
