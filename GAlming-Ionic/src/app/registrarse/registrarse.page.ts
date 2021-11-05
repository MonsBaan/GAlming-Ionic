import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  dni = "";
  nombre = "";
  apellido1 = "";
  apellido2 = "";
  email = "";
  ciudad = "";
  direccion = "";
  pass = "";

  constructor() { }

  ngOnInit() {
  }


  registrarse(){
    
  }
}
