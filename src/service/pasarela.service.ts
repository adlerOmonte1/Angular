import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pasarela } from "../models/pasarela.model";

@Injectable({
  providedIn: "root"
})

export class PasarelaService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET pasarela
    public getPasarela(): Observable<Pasarela[]> {
        return this.http.get<Pasarela[]>(this.ApiUrl + 'pasarelas/');
    }

    //POST Pasarela
    public postPasarela(pasarela:Pasarela): Observable<Pasarela>{
        let body = JSON.stringify(pasarela);
        return this.http.post<Pasarela>(this.ApiUrl + 'pasarelas/', body, this.httpOptions);
    }

    //PUT Pasarela
    public putPasarela(pasarela:Pasarela): Observable<Pasarela>{
        let body = JSON.stringify(pasarela);
        return this.http.put<Pasarela>(this.ApiUrl + 'pasarelas/' + pasarela.id + "/", body, this.httpOptions);
    }

    //DELETE Pasarela
    public deletePasarela(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'pasarelas/' + id + "/");
    }
}
