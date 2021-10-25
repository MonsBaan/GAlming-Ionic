import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  mensajes = [{ 'texto': 'asjdbasdkjsbadkj basdkjb dkjsbakjsd', 'esTrabajador': false}, { 'texto': 'asdasda asd adasdasd aaaaaaasd', 'esTrabajador': true}, { 'texto': 'asdas adik asdkla basdaasd', 'esTrabajador': true}];
  nuevoMensaje;
  idProd;

  constructor() { }

  ngOnInit() {
  }

  crearNuevoMensaje() {
    if (this.nuevoMensaje != null && this.nuevoMensaje != "") {
      this.mensajes.push({ 'texto': this.nuevoMensaje, 'esTrabajador': false});
      this.nuevoMensaje = "";
    }
  }

}
