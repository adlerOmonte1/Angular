import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hincha } from '../models/hincha.model';

@Injectable({
  providedIn: 'root'
})
export class HinchaService {
  private apiUrl = 'http://127.0.0.1:8000/api/hinchas/';

  constructor(private http: HttpClient) {}

  getHinchas(): Observable<Hincha[]> {
    return this.http.get<Hincha[]>(this.apiUrl);
  }

  postHincha(hincha: FormData): Observable<Hincha> {
    return this.http.post<Hincha>(this.apiUrl, hincha);
  }

  putHincha(hincha: FormData, id: number): Observable<Hincha> {
    return this.http.put<Hincha>(`${this.apiUrl}${id}/`, hincha);
  }

  updateHincha(hincha: Hincha): Observable<Hincha> {
  const idUsuario = hincha.Usuario.id;  // Usamos el ID del usuario que ya viene en el modelo
  return this.http.put<Hincha>(`${this.apiUrl}${idUsuario}/`, hincha);
}
}
