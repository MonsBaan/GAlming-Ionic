import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private appComponent:AppComponent) { }
  items = ["asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf",
  "c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf"
  ,"asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw",
  "eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf",
  "c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs",
  "bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf",
  "asafs","bafsaf","c","dwfafw","eawfafw","ffwaf","asafs","bafsaf","c","dwfafw","eawfafw",
  "ffwaf","asafs","bafsaf","c","dwfafw","eawfafw","ffwaf",];

  tipoProducto = ["Videojuegos", "Consolas", "Telefonia", "Minecraft"]

  ngOnInit() {
    localStorage.setItem("login", "0")
    console.log(localStorage.getItem("login"))

    /*if (localStorage.getItem("login")=="1") {
      this.appComponent.menuLogged();

    }else{
      this.appComponent.menu();

    }*/
  }





}
