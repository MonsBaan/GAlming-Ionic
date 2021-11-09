import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions= { headers: new HttpHeaders({'Content-Type': 'aplication/json'})};

@Injectable({
  providedIn: 'root'
})
export class ServService {

  public url = "https://galming.duckdns.org";

  constructor(private httpClient: HttpClient) { }

  getTiposProd(): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/producto/get_tipos");
  }

  getProductosTipo(idTipo): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/producto/get_by_tipo/" + idTipo);
  }

  getProducto(idProd): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/producto/getOnePlus/" + idProd);
  }

  getTiposServicios(): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/tipo/servicio");
  }

  getPedidos(idUsuario): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/servicio/user/" + idUsuario);
  }

  getPedidosTipo(idTipo, idUsuario): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/servicio/tipo/" + idTipo + "/" + idUsuario);
  }

  getMensajes(idServicio): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/asistencia/mensajes/" + idServicio);
  }

  postMensaje(info): Observable<any> {
    return this.httpClient.post(this.url + "/asistencia/mensajes", info);
  }
}
