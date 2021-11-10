import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {

  constructor(private appComponent:AppComponent, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    localStorage.setItem("login", "0");
    this.appComponent.menu();
    this.appComponent.loginCambio();
    this.router.navigateByUrl('/home');
  }


}
