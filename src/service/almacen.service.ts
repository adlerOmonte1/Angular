import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Almacen } from "../models/almacen.model";


@Injectable({
  providedIn: "root"
})

export class AlmacenService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Almacen
    public getAlmacen(): Observable<Almacen[]> {
        return this.http.get<Almacen[]>(this.ApiUrl + 'almacenes/');
    }

    //POST Almacen
    public postAlmacen(almacen:Almacen): Observable<Almacen>{
        let body = JSON.stringify(almacen);
        return this.http.post<Almacen>(this.ApiUrl + 'almacenes/', body, this.httpOptions);
    }

    //PUT Almacen
    public putAlmacen(almacen:Almacen): Observable<Almacen>{
        let body = JSON.stringify(almacen);
        return this.http.put<Almacen>(this.ApiUrl + 'almacenes/' + almacen.id + "/", body, this.httpOptions);
    }

    //DELETE Almacen
    public deleteAlmacen(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'almacenes/' + id + "/");
    }
}
