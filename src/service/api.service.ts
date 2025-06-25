import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto.model";
import { Categoria } from "../models/categoria.model";
import { Noticias } from "../models/noticias.model";
import { UnidadMedida } from "../models/unidadmedida";
import { Almacen } from "../models/almacen.model";
import { Proveedor } from "../models/proveedor.models";


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
        //GET CATEGORIAS
    public getCategoria(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.ApiUrl + 'categorias/');
    }

    //DELETE CATEGORIAS
    public deleteCategoria(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'categorias/' + id + "/");
    }

    //PUT CATEGORIAS
    // cambiar el id en el modelo de python
    public putCategoria(categoria:Categoria): Observable<Categoria>{
        let body = JSON.stringify(categoria);
        return this.http.put<Categoria>(this.ApiUrl + 'categorias/' + categoria.id + "/",body,this.httpOptions);
    }

    //POST CATEGORIAS
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

    //CRUD DE TALLAS(UNIDAD DE MEDIDAS)
    // GET TALLAS
    public getTallas():Observable<UnidadMedida[]>{
        return this.http.get<UnidadMedida[]>(this.ApiUrl+'tallas/');
    }
    // DELETE TALLAS
    public deleteTallas(id:string):Observable<void>{
        return this.http.delete<void>(this.ApiUrl+'tallas/'+id+"/");
    }
    public putTallas(unidadMedida:UnidadMedida):Observable<UnidadMedida>{
        let body = JSON.stringify(unidadMedida);
        return this.http.put<UnidadMedida>(this.ApiUrl+'tallas' + unidadMedida.id + "/" ,body,this.httpOptions)
    }
    public postTallas(unidadMedida:UnidadMedida):Observable<UnidadMedida>{
        let body = JSON.stringify(unidadMedida)
        return this.http.post<UnidadMedida>(this.ApiUrl + 'tallas/',body,this.httpOptions)
    }
    //CRUD DE TALLAS(UNIDAD DE MEDIDAS)
        // GET TALLAS
    public getAlmacen():Observable<Almacen[]>{
        return this.http.get<Almacen[]>(this.ApiUrl+'almacenes/');
    }
    // DELETE TALLAS
    public deleteAlmacen(id:string):Observable<void>{
        return this.http.delete<void>(this.ApiUrl+'almacenes/'+id+"/");
    }
    public putAlmacen(almacen:Almacen):Observable<Almacen>{
        let body = JSON.stringify(almacen);
        return this.http.put<Almacen>(this.ApiUrl+'almacenes' + almacen.id + "/" ,body,this.httpOptions)
    }
    public postAlmacen(almacen:Almacen):Observable<Almacen>{
        let body = JSON.stringify(Almacen)
        return this.http.post<Almacen>(this.ApiUrl + 'almacenes/',body,this.httpOptions)
    }
        //CRUD DE PROVEEDORES
        // GET TALLAS
    public getProveedor():Observable<Proveedor[]>{
        return this.http.get<Proveedor[]>(this.ApiUrl+'proveedores/');
    }
    // DELETE TALLAS
    public deleteProveedor(id:string):Observable<void>{
        return this.http.delete<void>(this.ApiUrl+'proveedores/'+id+"/");
    }
    public putProveedor(proveedor:Proveedor):Observable<Proveedor>{
        let body = JSON.stringify(proveedor);
        return this.http.put<Proveedor>(this.ApiUrl+'proveedores' + proveedor.id + "/" ,body,this.httpOptions)
    }
    public postProveedor(proveedor:Proveedor):Observable<Proveedor>{
        let body = JSON.stringify(Proveedor)
        return this.http.post<Proveedor>(this.ApiUrl + 'proveedores/',body,this.httpOptions)
    }

}
