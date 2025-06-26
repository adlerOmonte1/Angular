
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: "root"
})

export class UsuarioService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Usuario
    public getUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.ApiUrl + 'usuarios/');
    }

    //DELETE Usuario
    public deleteUsuario(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'usuarios/' + id + "/");
    }
}
