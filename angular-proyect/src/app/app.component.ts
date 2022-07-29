import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  sumarCalc(){
    this.resultado = this.numero1 + this.numero2
  }
}
