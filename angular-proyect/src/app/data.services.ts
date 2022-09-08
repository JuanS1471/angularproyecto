import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";


@Injectable()
export class DataService{
    constructor(
        private httpClient: HttpClient
    ){}
    
    cargarEmpl(){
        return this.httpClient.get('https://proyectangular-91409-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleado(empleado:empleado[]){
        this.httpClient.put('https://proyectangular-91409-default-rtdb.firebaseio.com/datos.json', empleado).subscribe(
            response=>console.log("Se ha guardado: " + response),
            error=>console.log("error: "+ error)
        )
    }

    actualizaEmpleado(indice:number,empleado:empleado){
        let url = 'https://proyectangular-91409-default-rtdb.firebaseio.com/datos/'+ indice + '.json'
        this.httpClient.put(url,empleado).subscribe(
            response=>console.log("Se ha actualizado: " + response),
            error=>console.log("error: "+ error)
        )
    }
    eliminaEmpleado(indice:number){
        let url = 'https://proyectangular-91409-default-rtdb.firebaseio.com/datos/'+ indice + '.json'
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado: " + response),
            error=>console.log("error: "+ error)
        )
    }
}