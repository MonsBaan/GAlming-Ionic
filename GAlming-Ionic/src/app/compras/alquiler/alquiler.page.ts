import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServService } from "./../../servicios/serv.service";

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.page.html',
  styleUrls: ['./alquiler.page.scss'],
})
export class AlquilerPage implements OnInit {

  productos;

  constructor(private servicio: ServService, private router: Router) { }

  ngOnInit() {
    this.getJuegosAlquiler();
  }

  async getJuegosAlquiler() {
    await this.servicio.getVideojuegos("1")
      .subscribe(res => {
        this.productos = res;
      }, err => {
        console.log(err);
      })
  }

  compra() {
    this.router.navigateByUrl('/compras/2/compras');
  }

  masInfoProd(idProd) {
    this.router.navigateByUrl('/detalle-compra/' + idProd);
  }

}
