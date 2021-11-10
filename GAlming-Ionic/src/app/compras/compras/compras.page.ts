import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServService } from "./../../servicios/serv.service";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  constructor(private servicio: ServService, private router: Router) { }

  ngOnInit() {
    //this.getJuegosCompra();
  }

  // async getJuegosCompra() {
  //   await this.servicio.getJuegosCompra()
  //     .subscribe(res => {
  //       console.log(res);
  //     }, err => {
  //       console.log(err);
  //     })
  // }

  alquiler() {
    this.router.navigateByUrl('/compras/2/alquiler');
  }

  masInfoProd(idProd) {

  }

}
