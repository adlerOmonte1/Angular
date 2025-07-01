import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tiposadmin } from "../models/tipo-administrador.model";

@Injectable({
  providedIn: "root"
})
export class TipoAdminService {
  private ApiUrl = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public getTiposAdmin(): Observable<tiposadmin[]> {
    return this.http.get<tiposadmin[]>(this.ApiUrl + 'tiposadmin/');
  }

  public postTiposAdmin(tipo: tiposadmin): Observable<tiposadmin> {
    let body = JSON.stringify(tipo);
    return this.http.post<tiposadmin>(this.ApiUrl + 'tiposadmin/', body, this.httpOptions);
  }

  public putTiposAdmin(tipo: tiposadmin): Observable<tiposadmin> {
    let body = JSON.stringify(tipo);
    return this.http.put<tiposadmin>(this.ApiUrl + 'tiposadmin/' + tipo.id + "/", body, this.httpOptions);
  }

  public deleteTiposAdmin(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'tiposadmin/' + id + "/");
  }
}
