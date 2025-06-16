import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto.model";


@Injectable({
  providedIn: "root"
})

export class apiService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    //GET Productos
    public getProducto(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.ApiUrl + 'productos/');
    }

    //DELETE Producto
    public deleteProducto(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'productos/' + id + "/");
    }

    //PUT Producto
    // cambiar el id en el modelo de python
    public putProducto(producto:Producto): Observable<Producto>{
        let body = JSON.stringify(producto);
        return this.http.put<Producto>(this.ApiUrl + 'productos/' + producto.id + "/",body,this.httpOptions);
    }

    //POST Producto
    public postProducto(producto:Producto): Observable<Producto>{
        let body = JSON.stringify(producto);
        return this.http.post<Producto>(this.ApiUrl + 'productos/',body,this.httpOptions);
    }
}
