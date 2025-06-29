import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private apiUrl = 'http://127.0.0.1:8000/api/';  // URL de la API de Django

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getJugador(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}jugadores/`);  // Suponiendo que la URL de la API sea /jugadores/
  }

  postJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.apiUrl}jugadores/`, jugador, this.httpOptions);
  }

  putJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.apiUrl}jugadores/${jugador.id}/`, jugador, this.httpOptions);
  }

  deleteJugador(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}jugadores/${id}/`);
  }
}
