import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServService } from "./../servicios/serv.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  tipos;
  pedidos;
  vacio = false;

  constructor(private servicio: ServService, private router: Router, public loadingController: LoadingController) {
  }

  ngOnInit() {
    if(localStorage.getItem("login") == "0") {
      this.router.navigateByUrl('/home');
    }

    this.getTodosPedidos();
    this.getTipos();
  }

  async getTodosPedidos() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();
    await this.servicio.getPedidos(localStorage.getItem("usuId"))
      .subscribe(res => {
        this.pedidos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      })
  }

  async getPedidosTipo(idTipo) {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();
    await this.servicio.getPedidosTipo(idTipo, localStorage.getItem("usuId"))
      .subscribe(res => {
        this.pedidos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      })
  }

  async getTipos() {
    await this.servicio.getTiposServicios()
      .subscribe(res => {
        this.tipos = res;
      }, err => {
        console.log(err);
      })
  }

  info(pedido) {
    localStorage.setItem("pedido", JSON.stringify(pedido));
    this.router.navigateByUrl('/pedido');
  }

  onChange(idElegido) {
    if (idElegido == "Todo") {
      this.getTodosPedidos();
    }else {
      this.getPedidosTipo(idElegido);
    }
  }
}
