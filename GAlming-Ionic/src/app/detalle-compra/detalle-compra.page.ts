import { Component, OnInit } from '@angular/core';
import { ServService } from "./../servicios/serv.service";

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.page.html',
  styleUrls: ['./detalle-compra.page.scss'],
})
export class DetalleCompraPage implements OnInit {

  producto = {};
  precioDescuento;

  constructor(private servicio: ServService) { }

  async getProducto() {
    await this.servicio.getProducto("1")
      .subscribe(res => {
        this.producto = res;

        if (this.producto[0].opProdDescuento != null && this.producto[0].opProdDescuento != 0) {
          this.precioDescuento = this.producto[0].opProdPrecio - ((this.producto[0].opProdPrecio * this.producto[0].opProdDescuento) / 100);
        }
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
    this.getProducto();
  }

  btn() {

  }

}
