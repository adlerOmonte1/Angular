import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Administrador } from "../models/administrador.model";

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

  constructor(private http: HttpClient) {
  }

  //GET Administrador
  public getAdministrador(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.ApiUrl + 'administradores/');
  }

  //POST Administrador
    public postAdministrador(admin: Administrador): Observable<Administrador> {
      return this.http.post<Administrador>(this.ApiUrl + 'administradores/', admin);
    }

    public putAdministrador(admin: Administrador): Observable<Administrador> {
      return this.http.put<Administrador>(this.ApiUrl + 'administradores/' + admin.id + "/", admin);
    }


  //DELETE Administrador
  public deleteAdministrador(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'administradores/' + id + "/");
  }
}
