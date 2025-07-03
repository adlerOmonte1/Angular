import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { administrador } from '../models/administrador.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiUrl = 'http://127.0.0.1:8000/api/administradores/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  // GET: obtener lista
  getAdministrador(): Observable<administrador[]> {
    return this.http.get<administrador[]>(this.apiUrl);
  }

  // POST: crear administrador
  postAdministrador(admin: any): Observable<administrador> {
    return this.http.post<administrador>(this.apiUrl, JSON.stringify(admin), this.httpOptions);
  }

  // PUT: actualizar administrador
  putAdministrador(admin: any, id: number): Observable<administrador> {
    return this.http.put<administrador>(`${this.apiUrl}${id}/`, JSON.stringify(admin), this.httpOptions);
  }

  // DELETE: eliminar administrador
  deleteAdministrador(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
