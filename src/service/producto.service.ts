import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto.model";

@Injectable({
  providedIn: "root"
})

export class ProductoService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-API-KEY': 'DESARROLLOWEBx'
        })
    };
    constructor(private http: HttpClient) {
    }

    //GET Productos
    public getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.ApiUrl + 'productos/', this.httpOptions);
    }
}
