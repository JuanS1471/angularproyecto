import { Injectable } from "@angular/core";
import { DataService } from "./data.services";
import { empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
@Injectable()

export class empleadosService{
    constructor( private notificacion: ServicioEmpleadosService,
        private dataservice:DataService){

    }

    setEmpleados(misEmpleados:empleado[]){
        this.empleados = misEmpleados
    }

    obtainEmp(){
        return this.dataservice.cargarEmpl()
    }

    empleados:empleado[]=[
    ]

    addUser(empleado: empleado){
        this.notificacion.mostrarMSG("El empleado es: " + empleado.nombre)
        this.empleados.push(empleado);
        this.dataservice.guardarEmpleado(this.empleados)
    }
    encontrarEmpleado(indice:number){
        let empleado:empleado = this.empleados[indice];

        return empleado;
    }
    actualizarEmp(indice:number, empleado:empleado){
        let empleadoAct = this.empleados[indice];
        empleadoAct.nombre = empleado.nombre;
        empleadoAct.apellido = empleado.apellido;
        empleadoAct.cargo= empleado.cargo;
        empleadoAct.salario = empleado.salario;
    }
    eliminarEmp(indice:number){
        this.empleados.splice(indice,1);
    }
}