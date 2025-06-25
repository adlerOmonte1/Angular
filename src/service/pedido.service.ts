import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";

@Injectable({
  providedIn: "root"
})

export class PedidoService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Pedido
    public getPedido(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(this.ApiUrl + 'pedidos/');
    }

    //DELETE Pedido
    public deletePedido(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'pedidos/' + id + "/");
    }
}
