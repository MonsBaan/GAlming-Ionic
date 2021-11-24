import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServService } from "./../../servicios/serv.service";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  productos;

  constructor(private servicio: ServService, private router: Router) { }

  ngOnInit() {
    this.getJuegosCompra();
  }

  ionViewWillEnter() {
    this.productos = [];
    this.getJuegosCompra();
  }

  async getJuegosCompra() {
    await this.servicio.getVideojuegos("2")
      .subscribe(res => {
        this.productos = res;
      }, err => {
        console.log(err);
      })
  }

  alquiler() {
    this.router.navigateByUrl('/compras/2/alquiler');
  }

  masInfoProd(idProd) {
    this.router.navigateByUrl('/detalle-compra/' + idProd);
  }

}
