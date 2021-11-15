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

  getVideojuegos(idOperacion): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/producto/getVideojuegosOp/" + idOperacion);
  }

  getBusqueda(buscar): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/producto/getBusqueda/" + buscar);
  }

  getTiposServicios(): Observable<any> {
    return this.httpClient.get<any[]>(this.url + "/tipo/servicio");
  }

  postServicio(info): Observable<any> {
    return this.httpClient.post(this.url + "/servicio/add", info);
  }

  postGeo(idUsu, info): Observable<any> {
    return this.httpClient.post(this.url + "/addlocalizacion/" + idUsu, info);
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

  postLogin(info): Observable<any> {
    return this.httpClient.post(this.url + "/usuario/login", info);
  }

  postUsuario(info): Observable<any> {
    return this.httpClient.post(this.url + "/addusuario/", info);
  }

  cambiarStock(info): Observable<any> {
    return this.httpClient.post(this.url + "/servicio/stock", info);
  }
}
