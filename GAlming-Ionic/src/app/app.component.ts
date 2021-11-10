import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
  fotoPerfil = "https://almi.eus/wp-content/uploads/2018/06/logo-Almi.jpg";
  login = localStorage.getItem("login");
  nombreUsu = localStorage.getItem("usuNombre");
  fotoUsu = localStorage.getItem("usuFoto");

  public labels = [
    {title: "Galeria", url: "/galeria"},
    {title: "Donde Estamos", url: "/donde-estamos"},
    {title: "Sobre Nosotros", url: "/sobre-nosotros"},
  ]

  constructor(private alertController:AlertController) {
    if (localStorage.getItem("login") == "1") {
      this.menuLogged();
    }else{
      this.menu();
    }
  }

  public menu() {
    this.appPages = [
      { title: 'Inicio', url: '/home', icon: 'home' },
      { title: 'Acceder', url: '/login', icon: 'key' },
      { title: 'Registrarse', url: '/registrarse', icon: 'person-add' },
    ];
  }

  public menuLogged() {
    this.appPages = [
      { title: 'Inicio', url: '/home', icon: 'home' },
      { title: 'Perfil', url: '/perfil', icon: 'person' },
      { title: 'Pedidos', url: '/pedidos', icon: 'paper-plane' },
      { title: 'Cerrar Sesion', url: '/cerrar-sesion', icon: 'log-out' },
    ];
  }

  public loginCambio() {
    this.login = localStorage.getItem("login");
    this.nombreUsu = localStorage.getItem("usuNombre");
    this.fotoUsu = localStorage.getItem("usuFoto");
    if(this.fotoUsu == "") {
      this.fotoUsu = "https://almi.eus/wp-content/uploads/2018/06/logo-Almi.jpg";
    }
  }

}
