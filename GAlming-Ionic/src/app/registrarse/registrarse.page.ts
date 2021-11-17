import { Component, OnInit } from '@angular/core';
import { ServService } from "./../servicios/serv.service";
import { Router } from "@angular/router";

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
  error = false;

  constructor(private servicio: ServService, private router: Router) { }

  ngOnInit() {
  }

  async registrar(info) {
    await this.servicio.postUsuario(info)
      .subscribe(res => {
        console.log(res);
        this.dni = "";
        this.nombre = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.email = "";
        this.ciudad = "";
        this.direccion = "";
        this.pass = "";

        this.router.navigateByUrl('/login');
      }, err => {
        console.log(err);
      })
  }

  registrarse(){
    if(this.dni != "" && this.nombre != "" && this.apellido1 != "" && this.apellido2 != "" && this.email != "" && this.ciudad != "" && this.direccion != "" && this.pass != ""){
      this.registrar({"usuDni": this.dni, "usuNombre": this.nombre, "usuApellido1": this.apellido1, "usuApellido2": this.apellido2, "usuEmail": this.email, "usuCiudad": this.ciudad, "usuDireccion": this.direccion, "usuPass": this.pass, "usuFoto": "https://almi.eus/wp-content/uploads/2018/06/logo-Almi.jpg"});
      this.error = false;
    }else{
      this.error = true;
    }

  }
}
