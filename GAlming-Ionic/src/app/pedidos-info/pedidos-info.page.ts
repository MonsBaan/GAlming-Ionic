import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {

  pedido = { 'id': 1, 'nombre': 'Producto1', 'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'precio': 12, 'fecha': '00-00-0000'};
  idServicio;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idServicio = params["params"]["idServicio"];
    });
  }

  btnAsist() {
    this.router.navigateByUrl('/asistencia/' + this.idServicio);
  }

}
