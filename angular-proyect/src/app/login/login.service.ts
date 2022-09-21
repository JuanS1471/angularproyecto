import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase  from "firebase/compat/app";
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class loginService{
    constructor(
        private router:Router,
        private cookie:CookieService
    ){

    }
    token!:string

    login(email:string, passw: string){
        firebase.auth().signInWithEmailAndPassword(email, passw).then(
            response =>{
                firebase.auth().currentUser?.getIdToken().then(
                    token =>{
                        this.token = token;
                        this.cookie.set("token",this.token);
                        this.router.navigate(['/']);
                    }
                )
            }
        )
    }

    getidToken(){
        //return this.token;
        return this.cookie.get("token");
    }

    estaLogueado(){

        return this.cookie.get("token");
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token = "";
            this.cookie.set("token",this.token);
            this.router.navigate(['/'])
        });
    }

}