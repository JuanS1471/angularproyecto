import { empleado } from "./empleado.model";

export class empleadosService{
    empleados:empleado[]=[
    ]

    addUser(empleado: empleado){
        this.empleados.push(empleado);
    }
}