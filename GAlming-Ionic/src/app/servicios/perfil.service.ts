import { Perfil } from '../perfilClass';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public url = "https://galming.duckdns.org/";

  constructor(private httpClient:HttpClient) { }

  cargarPerfil(perfil:Perfil): Observable<any>
  {
    return this.httpClient.get(this.url + "usuario/" + localStorage.getItem('usuId'));
  }

  actualizarPerfil(perfil:Perfil): Observable<any>
  {
    return this.httpClient.post(this.url + "updateusuario/" + localStorage.getItem('usuId'), perfil);
  }



}
