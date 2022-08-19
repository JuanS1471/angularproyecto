import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
@Injectable()

export class empleadosService{
    constructor( private notificacion: ServicioEmpleadosService){

    }

    empleados:empleado[]=[
    ]

    addUser(empleado: empleado){
        this.notificacion.mostrarMSG("El empleado es: " + empleado.nombre)
        this.empleados.push(empleado);
    }
}