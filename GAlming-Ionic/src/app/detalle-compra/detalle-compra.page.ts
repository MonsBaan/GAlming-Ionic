import { Component, OnInit } from '@angular/core';
import { ServService } from "./../servicios/serv.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.page.html',
  styleUrls: ['./detalle-compra.page.scss'],
})
export class DetalleCompraPage implements OnInit {

  producto = {};
  precioDescuento;
  nuevoServicio;
  idOpProducto;
  fechaHoy = new Date();
  fechaDevol;
  login = localStorage.getItem("login");
  txtBtn;

  constructor(private servicio: ServService, private route: ActivatedRoute, private router: Router) { }

  async getProducto() {
    await this.servicio.getProducto(this.idOpProducto)
      .subscribe(res => {
        this.producto = res;
        
        if (this.producto[0].opProdDescuento != null && this.producto[0].opProdDescuento != 0) {
          this.precioDescuento = this.producto[0].opProdPrecio - ((this.producto[0].opProdPrecio * this.producto[0].opProdDescuento) / 100);
        }

        if(this.producto[0].operacionDescripcion == "Compra") {
          this.txtBtn = "Comprar";
        }else if(this.producto[0].operacionDescripcion == "Alquiler") {
          this.txtBtn = "Alquilar";
        }
      }, err => {
        console.log(err);
      })
  }

  async postServicio(info) {
    await this.servicio.postServicio(info)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/pedidos');
        window.location.assign('/pedidos');
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idOpProducto = params["params"]["idProducto"];
    });

    this.getProducto();
  }

  postNuevoServicio() {
    if(this.producto[0].operacionDescripcion == "Compra"){
      this.fechaDevol = "2000-01-01";
    }else{
      this.fechaDevol = new Date(this.fechaHoy.getFullYear(), this.fechaHoy.getMonth(), this.fechaHoy.getDate()+30).toISOString().substring(0,10);
    }

    this.nuevoServicio = {
      "usuario": localStorage.getItem("usuId"),
      "producto": this.producto[0].prodId,
      "tipoServicio": 1,
      "descripcion": this.producto[0].operacionDescripcion +" de " + this.producto[0].prodNombre,
      "fechaCompra": new Date().toISOString().substring(0,10),
      "fechaDevolucion": this.fechaDevol,
      "precioCompra": this.producto[0].opProdPrecio,
      "descuentoCompra": this.producto[0].opProdDescuento
    };

    this.postServicio(this.nuevoServicio);
  }

}
