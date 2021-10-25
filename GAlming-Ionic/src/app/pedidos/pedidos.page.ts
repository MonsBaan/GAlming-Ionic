import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  tipos = [{ 'id': 1, 'nombre': 'Compra'}, { 'id': 2, 'nombre': 'Alquiler'}, { 'id': 3, 'nombre': '???'}];
  pedidos;
  vacio = false

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.pedidos = [{ 'id': 1, 'nombre': 'Producto1', 'precio': 12}, { 'id': 2, 'nombre': 'Producto2', 'precio': 50}, { 'id': 3, 'nombre': 'Producto3', 'precio': 1}];
  }

  info(id) {
    this.router.navigateByUrl('/pedido/' + id);
  }

  onChange(idElegido) {
    if (idElegido == "Todo") {
      this.pedidos = [{ 'id': 1, 'nombre': 'Producto1', 'precio': 12}, { 'id': 2, 'nombre': 'Producto2', 'precio': 50}, { 'id': 3, 'nombre': 'Producto3', 'precio': 1}];
      this.vacio = false;
    }else {
      this.pedidos = [];
      this.vacio = true;
    }
  }
}


//https://ionicframework.com/docs/api/virtual-scroll
