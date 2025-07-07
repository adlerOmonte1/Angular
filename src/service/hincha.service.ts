import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hincha } from "../models/hincha.model";

@Injectable({
  providedIn: "root"
})
export class HinchaService {
  private ApiUrl = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  //GET Hinchas
  public getHinchas(): Observable<Hincha[]> {
    return this.http.get<Hincha[]>(this.ApiUrl + 'hinchas/');
  }

  //POST Hincha (con imagen)
  public postHincha(hincha: FormData): Observable<Hincha> {
    return this.http.post<Hincha>(this.ApiUrl + 'hinchas/', hincha);
  }

  //PUT Hincha (con imagen)
  public putHincha(hincha: FormData, id: number): Observable<Hincha> {
    return this.http.put<Hincha>(this.ApiUrl + 'hinchas/' + id + "/", hincha);
  }

  //PUT Hincha (sin imagen, usando JSON)
  public updateHincha(hincha: Hincha): Observable<Hincha> {
    const idUsuario = hincha.Usuario.id;
    let body = JSON.stringify(hincha);
    return this.http.put<Hincha>(this.ApiUrl + 'hinchas/' + idUsuario + "/", body, this.httpOptions);
  }
}
