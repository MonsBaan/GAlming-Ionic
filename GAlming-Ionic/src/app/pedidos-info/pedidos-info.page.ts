import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {

  pedido = { 'id': -1, 'nombre': '', 'descripcion': '', 'precio': 0, 'fecha': '00-00-0000'};
  idServicio;
  verDesc = false;
  flecha = "ᐯ";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.idServicio = params["params"]["idServicio"];
    // });
    this.pedido = JSON.parse(localStorage.getItem("pedido"));
    localStorage.removeItem("pedido");
  }

  btnAsist() {
    this.router.navigateByUrl('/asistencia/' + this.pedido.id);
  }

  desc() {
    if (this.verDesc) {
      this.verDesc = false;
      this.flecha = "ᐯ";
    }else {
      this.verDesc = true;
      this.flecha = "ᐱ";
    }
  }

}
