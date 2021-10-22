import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  usuario = {nombre:"Mario" , apellido:"Torres" , contrasena:'Almi123'};

  ngOnInit() {
  }

}
