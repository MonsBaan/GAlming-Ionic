import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.page.html',
  styleUrls: ['./detalle-compra.page.scss'],
})
export class DetalleCompraPage implements OnInit {

  producto = { 'id': 1, 'nombre': 'Producto1', 'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'precio': 1042340, 'descuento': 25, 'fecha': '00-00-0000', 'stock': 5};
  precioDescuento;

  constructor() { }

  ngOnInit() {
    if (this.producto.descuento != null && this.producto.descuento != 0) {
      this.precioDescuento = this.producto.precio - ((this.producto.precio * this.producto.descuento) / 100);
    }
  }

}
