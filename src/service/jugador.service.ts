import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  private ApiUrl = 'http://127.0.0.1:8000/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // GET: obtener todos los jugadores
  public getJugadores(): Observable<jugador[]> {
    return this.http.get<jugador[]>(this.ApiUrl + 'jugadores/');
  }

  // POST: crear jugador (sin imagen)
  public postJugador(jugador: jugador): Observable<jugador> {
    let body = JSON.stringify(jugador);
    return this.http.post<jugador>(this.ApiUrl + 'jugadores/', body, this.httpOptions);
  }

  // PUT: actualizar jugador (sin imagen)
  public putJugador(jugador: jugador): Observable<jugador> {
    let body = JSON.stringify(jugador);
    return this.http.put<jugador>(this.ApiUrl + 'jugadores/' + jugador.id + '/', body, this.httpOptions);
  }

  // DELETE: eliminar jugador
  public deleteJugador(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'jugadores/' + id + '/');
  }

  // POST: crear jugador con imagen
  public postJugadorConImagen(formData: FormData): Observable<jugador> {
    return this.http.post<jugador>(this.ApiUrl + 'jugadores/', formData);
  }

  // PUT: actualizar jugador con imagen
  public putJugadorConImagen(formData: FormData, id: string): Observable<jugador> {
    return this.http.put<jugador>(this.ApiUrl + 'jugadores/' + id + '/', formData);
  }
}
