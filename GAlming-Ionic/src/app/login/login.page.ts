import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router";
import { ServService } from "./../servicios/serv.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dni;
  password;

  constructor(private appComponent:AppComponent, private geolocation:Geolocation, private router: Router, private servicio: ServService) { }

  ngOnInit() {
  }

  async postLogin(info) {
    await this.servicio.postLogin(info)
      .subscribe(res => {
        if(res.length != 0){
          localStorage.setItem("usuId", res[0].usuId);
          localStorage.setItem("usuNombre", res[0].usuNombre);
          localStorage.setItem("usuFoto", res[0].usuFoto);
          localStorage.setItem("login", "1");

          this.appComponent.menuLogged();
          this.appComponent.loginCambio();
          this.router.navigateByUrl('/home');

          console.log(this.geolocation.getCurrentPosition());
        }
      }, err => {
        console.log(err);
      })
  }

  login(){
    if(this.dni != null && this.dni != "" && this.password != null && this.password != ""){
      this.postLogin({"dni": this.dni, "password": this.password});
    }
  }

}
