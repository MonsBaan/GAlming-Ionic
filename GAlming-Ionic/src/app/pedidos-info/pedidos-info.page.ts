import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.page.html',
  styleUrls: ['./pedidos-info.page.scss'],
})
export class PedidosInfoPage implements OnInit {

  pedido = { 'id': 1, 'nombre': 'Producto1', 'descripcion': 'aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaa aaaaaa aaaaaaa', 'precio': 12, 'fecha': '00-00-0000'};
  idServicio;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idServicio = params["params"]["id"];
    });
  }

  btnAsist() {
    this.router.navigateByUrl('/asistencia/' + this.idServicio);
  }
  
}
