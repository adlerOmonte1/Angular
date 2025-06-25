import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto.model";
import { Categoria } from "../models/categoria.model";
import { Noticias } from "../models/noticias.model";


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


    // CRUD DE CATEGORIAS
        //GET Productos
    public getCategoria(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.ApiUrl + 'categorias/');
    }

    //DELETE Producto
    public deleteCategoria(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'categorias/' + id + "/");
    }

    //PUT Producto
    // cambiar el id en el modelo de python
    public putCategoria(categoria:Categoria): Observable<Categoria>{
        let body = JSON.stringify(categoria);
        return this.http.put<Categoria>(this.ApiUrl + 'categorias/' + categoria.id + "/",body,this.httpOptions);
    }

    //POST Producto
    public postCategoria(categoria:Categoria): Observable<Categoria>{
        let body = JSON.stringify(categoria);
        return this.http.post<Categoria>(this.ApiUrl + 'categorias/',body,this.httpOptions);
    }

    // CRUD DE NOTICIAS
    //GET Noticias
    public getNoticias(): Observable<Noticias[]> {
        return this.http.get<Noticias[]>(this.ApiUrl + 'noticias/');
    }
    //DELETE Noticias
    public deleteNoticias(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'noticias/' + id + "/");
    }
    //PUT Noticias
    public putNoticias(noticia:Noticias): Observable<Noticias>{
        let body = JSON.stringify(noticia);
        return this.http.put<Noticias>(this.ApiUrl + 'noticias/' + noticia.id + "/",body,this.httpOptions);
    }
    //POST Noticias
    public postNoticias(noticia:Noticias): Observable<Noticias>{
        let body = JSON.stringify(noticia);
        return this.http.post<Noticias>(this.ApiUrl + 'noticias/',body,this.httpOptions);
    }
}
