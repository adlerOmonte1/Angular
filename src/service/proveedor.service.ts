
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proveedor } from "../models/proveedor.models";

@Injectable({
  providedIn: "root"
})

export class ProveedorService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Proveedor
    public getProveedor(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(this.ApiUrl + 'proveedores/');
    }

    //DELETE Proveedor
    public deleteProveedor(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'proveedores/' + id + "/");
    }
}
