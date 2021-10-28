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
    this.pedidos = [{ 'id': 1, 'nombre': 'Producto1', 'descripcion': 'asdasd', 'precio': 12, 'fecha': '00-00-0000'}, { 'id': 2, 'nombre': 'Producto2', 'descripcion': 'asdasd', 'precio': 50, 'fecha': '00-00-0000'}, { 'id': 3, 'nombre': 'Producto3', 'descripcion': 'asdasd', 'precio': 1, 'fecha': '00-00-0000'}];
  }

  info(pedido) {
    localStorage.setItem("pedido", JSON.stringify(pedido));
    this.router.navigateByUrl('/pedido');
  }

  onChange(idElegido) {
    if (idElegido == "Todo") {
      this.pedidos = [{ 'id': 1, 'nombre': 'Producto1', 'descripcion': 'asdasd', 'precio': 12, 'fecha': '00-00-0000'}, { 'id': 2, 'nombre': 'Producto2', 'descripcion': 'asdasd', 'precio': 50, 'fecha': '00-00-0000'}, { 'id': 3, 'nombre': 'Producto3', 'descripcion': 'asdasd', 'precio': 1, 'fecha': '00-00-0000'}];
      this.vacio = false;
    }else {
      this.pedidos = [];
      this.vacio = true;
    }
  }
}


//https://ionicframework.com/docs/api/virtual-scroll
