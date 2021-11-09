import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private appComponent:AppComponent, private geolocation:Geolocation, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.geolocation.getCurrentPosition());
    localStorage.setItem("login", "1");
    this.appComponent.menuLogged();
    this.router.navigateByUrl('/home');
  }

}
