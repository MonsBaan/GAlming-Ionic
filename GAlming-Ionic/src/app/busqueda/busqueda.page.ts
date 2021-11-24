import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServService } from "./../servicios/serv.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  stringBuscar;
  productos;

  constructor(private servicio: ServService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stringBuscar = params["params"]["stringBuscar"];
    });


  }

  ionViewWillEnter() {
    this.productos = [];
    this.getBusqueda(this.stringBuscar);
  }

  async getBusqueda(buscar) {
    await this.servicio.getBusqueda(buscar)
      .subscribe(res => {
        this.productos = res;

      }, err => {
        console.log(err);
      })
  }

  masInfoProd(idProd) {
    this.router.navigateByUrl('/detalle-compra/' + idProd);
  }

}
