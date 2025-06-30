import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { administrador } from "../models/administrador.model";

@Injectable({
  providedIn: "root"
})
export class AdministradorService {
    private ApiUrl = "http://127.0.0.1:8000/api/";
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }

    // GET Administradores
    public getAdministradores(): Observable<administrador[]> {
        return this.http.get<administrador[]>(this.ApiUrl + 'administradores/');
    }

    // POST Administrador
    public postAdministrador(administrador: administrador): Observable<administrador> {
        let body = JSON.stringify(administrador);
        return this.http.post<administrador>(this.ApiUrl + 'administrador/', body, this.httpOptions);
    }

    // PUT Administrador
    public putAdministrador(administrador: administrador): Observable<administrador> {
        let body = JSON.stringify(administrador);
        return this.http.put<administrador>(this.ApiUrl + 'administrador/' + administrador.id + "/", body, this.httpOptions);
    } 

    // DELETE Administrador
    public deleteAdministrador(id: number): Observable<void> {  // <--- CORREGIDO A string
        return this.http.delete<void>(this.ApiUrl + 'administradores/' + id + "/");
    }
}
