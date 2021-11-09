import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ServService } from "./../servicios/serv.service";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  idTipo;
  productos;

  constructor(private servicio: ServService, private route: ActivatedRoute, private router: Router, private appComponent:AppComponent){
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(params => {
      this.idTipo = params["params"]["idTipo"];
    });

    this.getProductos(this.idTipo);
  }

  async getProductos(idTipo) {
    await this.servicio.getProductosTipo(idTipo)
      .subscribe(res => {
        this.productos = res;
      }, err => {
        console.log(err);
      })
  }

  masInfoProd(id) {
    this.router.navigateByUrl('/detalle-compra/' + id);
  }

}
