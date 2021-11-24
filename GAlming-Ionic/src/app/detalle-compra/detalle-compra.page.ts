import { Component, OnInit } from '@angular/core';
import { ServService } from "./../servicios/serv.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

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
  hayDescuento=false;

  constructor(private servicio: ServService, private route: ActivatedRoute, private router: Router, public alertController: AlertController) { }

  async getProducto() {
    await this.servicio.getProducto(this.idOpProducto)
      .subscribe(res => {
        this.producto = res;

        if (this.producto[0].opProdDescuento != null && this.producto[0].opProdDescuento != 0) {
          this.precioDescuento = this.producto[0].opProdPrecio - ((this.producto[0].opProdPrecio * this.producto[0].opProdDescuento) / 100);
          this.hayDescuento=true;
        }

        if(this.producto[0].opProdStock == 0) {
          this.txtBtn = "No hay stock";
        }else if(this.producto[0].operacionDescripcion == "Compra") {
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
        this.cambiarStock();
      }, err => {
        console.log(err);
      })
  }

  async cambiarStock() {
    await this.servicio.cambiarStock({"producto": this.producto[0].prodId, "stock": ""})
      .subscribe(res => {
        console.log(res);
        this.presentAlertConfirm();
      }, err => {
        console.log(err);
      })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Compra realizada',
      message: '¡Gracias por tu compra!',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.router.navigateByUrl('/pedidos');
            window.location.assign('/pedidos');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idOpProducto = params["params"]["idProducto"];
    });

  }

  ionViewWillEnter() {
    this.producto = {};
    this.getProducto();
  }

  postNuevoServicio() {
    if(this.producto[0].operacionDescripcion == "Compra"){
      this.fechaDevol = new Date().toISOString().substring(0,10);
    }else{
      this.fechaDevol = "";
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
