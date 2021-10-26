import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'detallecompra', url: '/detalle-compra/1', icon: 'home' },
    { title: 'Pedidos', url: '/pedidos', icon: 'paper-plane' },
  ];

  constructor() {}
}
