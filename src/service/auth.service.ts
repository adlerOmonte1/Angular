import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8000/api/login/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap(res=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('rol',res.usuario.rol.toUpperCase()); // toUpperCase() para que la comparacion sea entre mayusculas
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  getRol():string | null {
    return localStorage.getItem('rol');}

  esAdmin():boolean {
    return this.getRol() === 'ADMINISTRADOR'; // para comparar el rol
  }
  esEspectador():boolean {
    return this.getRol() === 'HINCHA';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
}




/*
CODIGO DE CLASE
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; // nos sirve para que nuestra cookie
@Injectable({
  providedIn: 'root'
})
export class AuthcService{
    private token = new BehaviorSubject <string | null>(null);
    private apiUrl= "http://127.0.0.1:8000/api"
    constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){}
    // 1 conectar la api,2 cambiar de pagina,3 de que pagina fue invocado
    loginC(username:string, password:string){
        const headers = {'x-api-key' :'VALORAPIKEY'} // segun es el valor de la apikey
        this.http.post<{token:string}>(this.apiUrl+'obtener-token/',{username,password},{headers}).subscribe(respuesta=>{
            // invoca al objeto http, ruta de la api(login),parametros que envia al postamn, apikey del headers; todo eso devuelve un TOKEN
            this.token.next(respuesta.token);
            localStorage.setItem('token',respuesta.token)
            const urlRetorno = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
            this.router.navigateByUrl(urlRetorno);
        },error => {
            console.error('Error Login',error)
        }
    );
    }

    estaLogeado(){
        return this.token.value !== null; // comparacion (verdadero o falso)
        // evalua si el token tiene valor y tiene valor diferente a nulo, si es verdadero esta logueado.
    }
}
*/
