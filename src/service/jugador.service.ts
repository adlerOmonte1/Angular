import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { jugador } from "../models/jugador.model";

@Injectable({
  providedIn: "root"
})
export class JugadorService {
  private ApiUrl = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public getJugadores(): Observable<jugador[]> {
    return this.http.get<jugador[]>(this.ApiUrl + 'jugadores/');
  }

  public postJugador(jug: jugador): Observable<jugador> {
    let body = JSON.stringify(jug);
    return this.http.post<jugador>(this.ApiUrl + 'jugadores/', body, this.httpOptions);
  }

  public putJugador(jug: jugador): Observable<jugador> {
    let body = JSON.stringify(jug);
    return this.http.put<jugador>(this.ApiUrl + 'jugadores/' + jug.id + "/", body, this.httpOptions);
  }

  public deleteJugador(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'jugadores/' + id + "/");
  }
}
