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
  fallo = false;

  constructor(private appComponent:AppComponent, private geolocation:Geolocation, private router: Router, private servicio: ServService) { }

  ngOnInit() {
  }

  async postLogin(info) {
    await this.servicio.postLogin(info)
      .subscribe(res => {
        if(res.length != 0){
          this.fallo = false;
          localStorage.setItem("usuId", res[0].usuId);
          localStorage.setItem("usuNombre", res[0].usuNombre);
          localStorage.setItem("usuFoto", res[0].usuFoto);
          localStorage.setItem("login", "1");
          
          //console.log(this.geolocation.getCurrentPosition());
          
          this.geolocation.getCurrentPosition().then((resp) => {
            this.postGeo({"geoFecha": new Date().toISOString().substring(0,10), "geoLat": resp.coords.latitude, "geoLon": resp.coords.longitude});
            // resp.coords.latitude
            // resp.coords.longitude
          }).catch((error) => {
            console.log('Error getting location', error);
          });

          this.appComponent.menuLogged();
          this.appComponent.loginCambio();
          this.router.navigateByUrl('/home');
        }else{
          this.fallo = true;
        }
      }, err => {
        console.log(err);
      })
  }

  async postGeo(info) {
    await this.servicio.postGeo(localStorage.getItem("usuId"), info)
      .subscribe(res => {
        console.log(res);
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
