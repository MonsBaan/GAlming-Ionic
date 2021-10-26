import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
  fotoPerfil = "https://almi.eus/wp-content/uploads/2018/06/logo-Almi.jpg"

  public labels = [
    {title: "Galeria", url: "/galeria"}, 
    {title: "Donde Estamos", url: "/donde-estamos"}, 
    {title: "Sobre Nosotros", url: "/sobre-nosotros"},
  ]
  constructor(private alertController:AlertController) {
    this.menu();
    localStorage.setItem("login", "0");
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
      { title: 'Perfil', url: '/home', icon: 'person' },
      { title: 'Pedidos', url: '/home', icon: 'archive' },
      { title: 'Cerrar Sesion', url: '/home', icon: 'log-out' },

    ];
  }

}
