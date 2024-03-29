import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  nombre = "Jose"
  apellido = "Gomez"
  edad = 24
  empresa="GooG";

  constructor() { }

  ngOnInit(): void {
  }

  textoRegister = 'No hay nadie registrado'

  
  habilitacionCuadro = false;
  userRegister = false
  userRegistr(){
    this.userRegister = true
  }
  setUsuarioRegistrado(event: Event){
    
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoRegister = 'Alguien registrado';
    }
    else{
      this.textoRegister = 'No hay nadie registrado';
    }
  }
}
