import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private ApiUrl = 'http://127.0.0.1:8000/api/'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  //GET Producto CRUD:Select READ
  public getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.ApiUrl + 'productos/');
  }

  //POST Producto CRUD:Create
  public postProducto(producto: Producto): Observable<Producto> {
    let body = JSON.stringify(producto);
    return this.http.post<Producto>(
      this.ApiUrl + 'productos/',
      body,
      this.httpOptions
    );
  }

  //PUT Producto CRUD:Update
  public putProducto(producto: Producto): Observable<Producto> {
    let body = JSON.stringify(producto);
    return this.http.put<Producto>(
      this.ApiUrl + 'productos/' + producto.id + '/',
      body,
      this.httpOptions
    );
  }

  //DELETE Producto CRUD:Delete
  public deleteProducto(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'productos/' + id + '/');
  }

  //POST Producto enviar imagen
  public postProductoConImagen(producto: FormData): Observable<Producto> {
    return this.http.post<Producto>(this.ApiUrl + 'productos/', producto);
  }

  //PUT Producto enviar imagen
  public putProductoConImagen(producto:FormData,id:string): Observable<Producto>{
        return this.http.put<Producto>(this.ApiUrl + 'productos/' + id + "/",producto);
  }
}
