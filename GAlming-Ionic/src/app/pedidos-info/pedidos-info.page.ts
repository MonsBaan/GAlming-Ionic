import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {

  pedido = { 'id': 1, 'nombre': 'Producto1', 'precio': 12};

  constructor() { }

  ngOnInit() {
  }

}
