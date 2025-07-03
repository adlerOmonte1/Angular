import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hinchas } from '../models/hincha.model';

@Injectable({
  providedIn: 'root'
})
export class HinchaService {
  private apiUrl = 'http://127.0.0.1:8000/api/hinchas/';

  constructor(private http: HttpClient) {}

  getHinchas(): Observable<hinchas[]> {
    return this.http.get<hinchas[]>(this.apiUrl);
  }

  postHincha(hincha: FormData): Observable<hinchas> {
    return this.http.post<hinchas>(this.apiUrl, hincha);
  }

  putHincha(hincha: FormData, id: number): Observable<hinchas> {
    return this.http.put<hinchas>(`${this.apiUrl}${id}/`, hincha);
  }

  updateHincha(hincha: hinchas): Observable<hinchas> {
  const idUsuario = hincha.Usuario.id;  // Usamos el ID del usuario que ya viene en el modelo
  return this.http.put<hinchas>(`${this.apiUrl}${idUsuario}/`, hincha);
}
}
