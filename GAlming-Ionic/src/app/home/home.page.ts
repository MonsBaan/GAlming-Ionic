import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ServService } from "./../servicios/serv.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  fotoPerfil = this.appComponent.fotoPerfil;

  constructor(private appComponent: AppComponent, private servicio: ServService, private router: Router) { }
  // items = ["asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf",
  // "c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf"
  // ,"asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw",
  // "eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf",
  // "c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs",
  // "bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf",
  // "asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw",
  // "ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf",];

  txtBuscar;
  tipoProducto = [];
  items = [];

  ngOnInit() {
    this.getTipos();
  }

  async getTipos() {
    await this.servicio.getTiposProd()
      .subscribe(res => {
        let listaProducto = res;

        listaProducto.forEach(async tipo => {
          await this.servicio.getProductosTipo(tipo.tipoProdId).subscribe(res =>{
            if (res.length != 0) {
              this.tipoProducto.push({"tipoID":tipo.tipoProdId, "tipoNombre":tipo.tipoProdNombre ,"data":res})
            }

          },
          err => {
            console.log(err)
          })

        });
      }, err => {
        console.log(err);
      })
  }

  /*
    async getTipos() {
      await this.servicio.getTiposProd()
      .subscribe(res => {
        this.tipoProducto = res;
        this.tipoProducto.forEach((obj, index) => {
          this.getProductos(obj.tipoProdId);
        });
      }, err => {
        console.log(err);
      })
    }

    async getProductos(idTipo) {
      await this.servicio.getProductosTipo(idTipo)
        .subscribe(res => {
          if(res.length != 0){
            console.log(res);
            this.items.push(res);
          }else{
            console.log("vacio");
          }

        }, err => {
          console.log(err);
        })
    }
  */

  irProductos(idTipo) {
    this.router.navigateByUrl('/compras/' + idTipo);
  }

  busqueda() {
    if (this.txtBuscar != "" && this.txtBuscar != null) {
      this.router.navigateByUrl('/busqueda/' + this.txtBuscar);
      this.txtBuscar = "";
    }
  }

  infoProducto(idProd) {
    this.router.navigateByUrl('/detalle-compra/' + idProd);
  }

}
