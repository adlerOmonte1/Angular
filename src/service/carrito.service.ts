import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Carrito } from "../models/carrito.model";

@Injectable({
  providedIn: "root"
})

export class CarritoService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Carrito
    public getCarrito(): Observable<Carrito[]> {
        return this.http.get<Carrito[]>(this.ApiUrl + 'carrito/');
    }

    //DELETE Carrito
    public deleteCarrito(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'carrito/' + id + "/");
    }
}
