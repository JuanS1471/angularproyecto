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


  constructor() { }

  ngOnInit(): void {
  }

  cambiarEmpresa(value: string){
    
  }
  habilitacionCuadro = true;
  userRegister = false
  userRegistr(){
    this.userRegister = true
  }

}
