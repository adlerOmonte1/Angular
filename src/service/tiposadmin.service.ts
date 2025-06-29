import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tiposadmin } from '../models/tipo-administrador.model';  // Cambié el nombre del modelo

@Injectable({
  providedIn: 'root'
})
export class TipoAdminService {  // Cambié el nombre del servicio
  private ApiUrl = 'http://127.0.0.1:8000/api/';  // URL de la API

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Obtener todos los tiposAdmin
  getTipoAdmin(): Observable<tiposadmin[]> {  // Cambié el nombre del método
    return this.http.get<tiposadmin[]>(this.ApiUrl + 'tiposadmin/');  // Cambié la ruta
  }

  // Crear un nuevo tipoAdmin
  postTipoAdmin(tipoAdmin: tiposadmin): Observable<tiposadmin> {  // Cambié el nombre del método
    return this.http.post<tiposadmin>(this.ApiUrl + 'tiposadmin/', tipoAdmin, this.httpOptions);  // Cambié la ruta
  }

  // Actualizar un tipoAdmin
  putTipoAdmin(tipoAdmin: tiposadmin): Observable<tiposadmin> {  // Cambié el nombre del método
    return this.http.put<tiposadmin>(this.ApiUrl + 'tiposadmin/' + tipoAdmin.id + '/', tipoAdmin, this.httpOptions);  // Cambié la ruta
  }

  // Eliminar un tipoAdmin
  deleteTipoAdmin(id: string): Observable<void> {  // Cambié el nombre del método
    return this.http.delete<void>(this.ApiUrl + 'tiposadmin/' + id + '/');  // Cambié la ruta
  }
}
