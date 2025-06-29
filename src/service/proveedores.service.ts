import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proveedores } from "../models/proveedores.models";

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

    constructor(private http: HttpClient) {}

    //GET Proveedor (Obtener todos los proveedores)
    public getProveedor(): Observable<Proveedores[]> {
        return this.http.get<Proveedores[]>(this.ApiUrl + 'proveedores/', this.httpOptions);
    }

    //POST Proveedor (Crear un nuevo proveedor)
    public postProveedor(proveedor: Proveedores): Observable<Proveedores> {
        let body = JSON.stringify(proveedor);
        return this.http.post<Proveedores>(this.ApiUrl + 'proveedores/', body, this.httpOptions);
    }

    //PUT Proveedor (Actualizar un proveedor existente)
    public putProveedor(proveedor: Proveedores): Observable<Proveedores> {
        let body = JSON.stringify(proveedor);
        return this.http.put<Proveedores>(this.ApiUrl + 'proveedores/' + proveedor.id + "/", body, this.httpOptions);
    }

    //DELETE Proveedor (Eliminar un proveedor)
    public deleteProveedor(id: string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'proveedores/' + id + "/", this.httpOptions);
    }
}
