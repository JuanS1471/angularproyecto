import { Component, Input, OnInit } from '@angular/core';
import { empleado } from 'src/app/empleado.model';

@Component({
  selector: 'app-componentchild',
  templateUrl: './componentchild.component.html',
  styleUrls: ['./componentchild.component.css']
})
export class ComponentchildComponent implements OnInit {
  @Input()
  empleados:empleado[]=[
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
