import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServService } from "./../servicios/serv.service";
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  mensajes;
  nuevoMensaje;
  idServicio;

  constructor(private servicio: ServService, private route: ActivatedRoute) { }

  async getMensajes() {
    await this.servicio.getMensajes(this.idServicio)
      .subscribe(res => {
        this.mensajes = res;
        //this.mensajes.splice(0, 1);
      }, err => {
        console.log(err);
      })
  }

  async postMensaje(info) {
    await this.servicio.postMensaje(info)
      .subscribe(res => {
        this.mensajes = res;
        this.getMensajes();
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idServicio = params["params"]["idServicio"];
    });

    this.getMensajes();
  }

  crearNuevoMensaje() {
    if (this.nuevoMensaje != null && this.nuevoMensaje != "") {
      this.postMensaje({'mensaje': this.nuevoMensaje, 'servicio': this.idServicio});
      this.nuevoMensaje = "";

      this.content.scrollToBottom(200);
    }
  }

}
