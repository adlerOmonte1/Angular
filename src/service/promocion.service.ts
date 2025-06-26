import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { promocion } from "../models/promocion.model";

@Injectable({
  providedIn: "root"
})

export class PromocionService {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    //GET Promocion
    public getPromocion(): Observable<promocion[]> {
        return this.http.get<promocion[]>(this.ApiUrl + 'promociones/');
    }

    //POST Promocion
    public postPromocion(promocion:promocion): Observable<promocion>{
        let body = JSON.stringify(promocion);
        return this.http.post<promocion>(this.ApiUrl + 'promociones/', body, this.httpOptions);
    }

    //PUT Promocion
    public putPromocion(promocion:promocion): Observable<promocion>{
        let body = JSON.stringify(promocion);
        return this.http.put<promocion>(this.ApiUrl + 'promociones/' + promocion.id + "/", body, this.httpOptions);
    }

    //DELETE Promocion
    public deletePromocion(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'promociones/' + id + "/");
    }
}
