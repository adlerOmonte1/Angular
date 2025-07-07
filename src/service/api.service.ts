import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// Models
import { Producto } from "../models/producto.model";
import { Categoria } from "../models/categoria.model";
import { Noticia } from "../models/noticias.model";
import { UnidadMedida } from "../models/unidadmedida";
import { Partido } from "../models/partidos.model";
import { Historia } from "../models/historia.model";
import { PostHistoria } from "../models/post-historia.model";

@Injectable({
  providedIn: "root"
})
export class apiService {
  private ApiUrl = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) {}

  // ------------------ CRUD PRODUCTOS ------------------
  public getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.ApiUrl + 'productos/');
  }

  public postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.ApiUrl + 'productos/', producto, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public putProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.ApiUrl + 'productos/' + producto.id + "/", producto, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteProducto(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'productos/' + id + "/");
  }

  // ------------------ CRUD CATEGORIAS ------------------
  public getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.ApiUrl + 'categorias/');
  }

  public postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.ApiUrl + 'categorias/', categoria, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.ApiUrl + 'categorias/' + categoria.id + "/", categoria, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteCategoria(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'categorias/' + id + "/");
  }

 // ------------------ CRUD NOTICIAS ------------------
  public getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.ApiUrl + 'noticias/');
  }

  public postNoticiasForm(data: FormData): Observable<Noticia> {
    return this.http.post<Noticia>(this.ApiUrl + 'noticias/', data);
  }

  public putNoticiasForm(id: number, data: FormData): Observable<Noticia> {
    return this.http.put<Noticia>(this.ApiUrl + 'noticias/' + id + '/', data);
  }

  public deleteNoticias(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'noticias/' + id + '/');
  }
  // ------------------ CRUD TALLAS ------------------
  public getTallas(): Observable<UnidadMedida[]> {
    return this.http.get<UnidadMedida[]>(this.ApiUrl + 'tallas/');
  }

  public postTallas(unidadMedida: UnidadMedida): Observable<UnidadMedida> {
    return this.http.post<UnidadMedida>(this.ApiUrl + 'tallas/', unidadMedida, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public putTallas(unidadMedida: UnidadMedida): Observable<UnidadMedida> {
    return this.http.put<UnidadMedida>(this.ApiUrl + 'tallas/' + unidadMedida.id + "/", unidadMedida, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteTallas(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'tallas/' + id + "/");
  }

  // ------------------ CRUD PARTIDOS ------------------
  public getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.ApiUrl + 'partidos/');
  }

  public getPartido(id: number): Observable<Partido> {
    return this.http.get<Partido>(this.ApiUrl + 'partidos/' + id + '/');
  }

  public postPartido(partido: Partido): Observable<Partido> {
    return this.http.post<Partido>(this.ApiUrl + 'partidos/', partido, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public putPartido(id: number, partido: any): Observable<Partido> {
    return this.http.put<Partido>(this.ApiUrl + 'partidos/' + id + '/', partido, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deletePartido(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'partidos/' + id + '/');
  }

  // ------------------ CRUD HISTORIAS ------------------
public getHistorias(): Observable<Historia[]> {
  return this.http.get<Historia[]>(this.ApiUrl + 'historias/');
}

public postHistoriaConImagen(data: FormData): Observable<Historia> {
  return this.http.post<Historia>(this.ApiUrl + 'historias/', data);
}

public putHistoriaConImagen(id: number, data: FormData): Observable<Historia> {
  return this.http.put<Historia>(this.ApiUrl + 'historias/' + id + '/', data);
}

public deleteHistoria(id: number): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'historias/' + id + '/');
}


// ------------------ CRUD POST_HISTORIA ------------------

public getPostHistorias(): Observable<PostHistoria[]> {
  return this.http.get<PostHistoria[]>(this.ApiUrl + 'post-historias/');
}
public postPostHistoria(data: FormData): Observable<PostHistoria> {
  return this.http.post<PostHistoria>(this.ApiUrl + 'post-historias/', data);
}

public putPostHistoria(id: number, data: FormData): Observable<PostHistoria> {
  return this.http.put<PostHistoria>(this.ApiUrl + 'post-historias/' + id + '/', data);
}

public deletePostHistoria(id: number): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'post-historias/' + id + '/');
}

}
