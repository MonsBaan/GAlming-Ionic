import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServService } from "./../servicios/serv.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  stringBuscar;

  constructor(private servicio: ServService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stringBuscar = params["params"]["stringBuscar"];
    });

  }

}
