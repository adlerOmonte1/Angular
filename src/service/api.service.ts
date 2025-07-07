import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Producto } from "../models/producto.model";
import { Categoria } from "../models/categoria.model";
import { Noticia } from "../models/noticias.model";
import { UnidadMedida } from "../models/unidadmedida";
import { Partido } from "../models/partidos.model";
import { Historia } from "../models/historia.model";
import { PostHistoria } from "../models/post-historia.model";
import { Stock} from "../models/stock.model";
import { Kardex } from "../models/kardex.model";
import { Usuario } from "../models/usuario.model";
import { Hincha } from "../models/hincha.model";

@Injectable({
  providedIn: "root"
})
export class apiService {
  private ApiUrl = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // ------------------ CRUD PRODUCTOS ------------------
  public getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.ApiUrl + 'productos/');
  }

  public postProducto(producto: Producto): Observable<Producto> {
    let body = JSON.stringify(producto);
    return this.http.post<Producto>(this.ApiUrl + 'productos/', body, this.httpOptions);
  }

  public putProducto(producto: Producto): Observable<Producto> {
    let body = JSON.stringify(producto);
    return this.http.put<Producto>(this.ApiUrl + 'productos/' + producto.id + "/", body, this.httpOptions);
  }

  public deleteProducto(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'productos/' + id + "/");
  }

  // ------------------ CRUD CATEGORIAS ------------------
  public getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.ApiUrl + 'categorias/');
  }

  public postCategoria(categoria: Categoria): Observable<Categoria> {
    let body = JSON.stringify(categoria);
    return this.http.post<Categoria>(this.ApiUrl + 'categorias/', body, this.httpOptions);
  }

  public putCategoria(categoria: Categoria): Observable<Categoria> {
    let body = JSON.stringify(categoria);
    return this.http.put<Categoria>(this.ApiUrl + 'categorias/' + categoria.id + "/", body, this.httpOptions);
  }

  public deleteCategoria(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'categorias/' + id + "/");
  }

  // ------------------ CRUD NOTICIAS ------------------
  public getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.ApiUrl + 'noticias/');
  }

  public postNoticias(noticia: Noticia): Observable<Noticia> {
    let body = JSON.stringify(noticia);
    return this.http.post<Noticia>(this.ApiUrl + 'noticias/', body, this.httpOptions);
  }

  public putNoticias(noticia: Noticia): Observable<Noticia> {
    let body = JSON.stringify(noticia);
    return this.http.put<Noticia>(this.ApiUrl + 'noticias/' + noticia.id + "/", body, this.httpOptions);
  }

  public deleteNoticias(id: string): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'noticias/' + id + "/");
  }

  // ------------------ CRUD TALLAS (UnidadMedida) ------------------
  public getTallas(): Observable<UnidadMedida[]> {
    return this.http.get<UnidadMedida[]>(this.ApiUrl + 'tallas/');
  }

  public postTallas(unidadMedida: UnidadMedida): Observable<UnidadMedida> {
    let body = JSON.stringify(unidadMedida);
    return this.http.post<UnidadMedida>(this.ApiUrl + 'tallas/', body, this.httpOptions);
  }

  public putTallas(unidadMedida: UnidadMedida): Observable<UnidadMedida> {
    let body = JSON.stringify(unidadMedida);
    return this.http.put<UnidadMedida>(this.ApiUrl + 'tallas/' + unidadMedida.id + "/", body, this.httpOptions);
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
    let body = JSON.stringify(partido);
    return this.http.post<Partido>(this.ApiUrl + 'partidos/', body, this.httpOptions);
  }

  public putPartido(partido: Partido): Observable<Partido> {
    let body = JSON.stringify(partido);
    return this.http.put<Partido>(this.ApiUrl + 'partidos/' + partido.id + '/', body, this.httpOptions);
  }

  public deletePartido(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'partidos/' + id + '/');
  }

  // ------------------ CRUD HISTORIAS ------------------
  public getHistorias(): Observable<Historia[]> {
    return this.http.get<Historia[]>(this.ApiUrl + 'historias/');
  }

  public postHistoria(historia: Historia): Observable<Historia> {
    let body = JSON.stringify(historia);
    return this.http.post<Historia>(this.ApiUrl + 'historias/', body, this.httpOptions);
  }

  public putHistoria(historia: Historia): Observable<Historia> {
    let body = JSON.stringify(historia);
    return this.http.put<Historia>(this.ApiUrl + 'historias/' + historia.id + '/', body, this.httpOptions);
  }

  public deleteHistoria(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + 'historias/' + id + '/');
  }

// ------------------ CRUD POST_HISTORIA ------------------
public getPostHistorias(): Observable<PostHistoria[]> {
  return this.http.get<PostHistoria[]>(this.ApiUrl + 'post-historias/');
}

public postPostHistoria(postHistoria: PostHistoria): Observable<PostHistoria> {
  let body = JSON.stringify(postHistoria);
  return this.http.post<PostHistoria>(this.ApiUrl + 'post-historias/', body, this.httpOptions);
}

public putPostHistoria(postHistoria: PostHistoria): Observable<PostHistoria> {
  let body = JSON.stringify(postHistoria);
  return this.http.put<PostHistoria>(this.ApiUrl + 'post-historias/' + postHistoria.id + '/', body, this.httpOptions);
}

public deletePostHistoria(id: number): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'post-historias/' + id + '/');
}


public getStock():Observable<Stock[]>{
  return this.http.get<Stock[]>(this.ApiUrl+'stock/');
}
public postStock(stock: Stock): Observable<Stock> {
  let body = JSON.stringify(stock);
  return this.http.post<Stock>(this.ApiUrl + 'stock/', body, this.httpOptions);
}
public putStock(stock: Stock): Observable<Stock> {
  let body = JSON.stringify(stock);
  return this.http.put<Stock>(this.ApiUrl + 'stock/' + stock.id + '/', body, this.httpOptions);
}

public deleteStock(id: string): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'stock/' + id + '/');
}

public getKardex():Observable<Kardex[]>{
  return this.http.get<Kardex[]>(this.ApiUrl+'kardex/');
}
public postKardex(stock: Kardex): Observable<Kardex> {
  let body = JSON.stringify(stock);
  return this.http.post<Kardex>(this.ApiUrl + 'kardex/', body, this.httpOptions);
}
public putKardex(kardex: Kardex): Observable<Kardex> {
  let body = JSON.stringify(kardex);
  return this.http.put<Kardex>(this.ApiUrl + 'kardex/' + kardex.id + '/', body, this.httpOptions);
}

public deleteKardex(id: string): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'kardex/' + id + '/');
}

public getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.ApiUrl + 'usuarios/');
}

public getUsuario(): Observable<Usuario> {
  return this.http.get<Usuario>(this.ApiUrl + 'usuarios/');
}

public postUsuario(usuario: Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(this.ApiUrl + 'usuarios/', usuario, this.httpOptions);
}

public putUsuario(usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(this.ApiUrl + 'usuarios/' + usuario.id + '/', usuario, this.httpOptions);
}

public deleteUsuario(id: number): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'usuarios/' + id + '/');
}
public getHincha(): Observable<Hincha[]> {
  return this.http.get<Hincha[]>(this.ApiUrl + 'hinchas/');
}
public postHincha(hincha: Hincha): Observable<Hincha> {
  return this.http.post<Hincha>(this.ApiUrl + 'hinchas/', hincha, this.httpOptions);
}
public putHincha(hincha: Hincha): Observable<Hincha> {
  return this.http.put<Hincha>(this.ApiUrl + 'hinchas/' + hincha.id + '/', hincha, this.httpOptions);
}
public deleteHincha(id: number): Observable<void> {
  return this.http.delete<void>(this.ApiUrl + 'hinchas/' + id + '/');
}
public getUsuarioconID(id: number): Observable<Usuario> {
  return this.http.get<Usuario>(this.ApiUrl + 'usuarios/' + id + '/');
}
public getHinchaconID(id: number): Observable<Hincha> {
  return this.http.get<Hincha>(this.ApiUrl + 'hinchas/' + id + '/');
}

}
