import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];

  public labels = ['Donde Estamos', 'Galeria', 'Sobre Nosotros'];
  
  constructor() {
    this.menu();
  }




  public menu(){
    this.appPages = [
      { title: 'Acceder', url: '/home', icon: 'key' },
      { title: 'Registrarse', url: '/home', icon: 'person-add' },
  
    ];
  }

  public menuLogged(){
    this.appPages = [
      { title: 'Perfil', url: '/home', icon: 'person' },
      { title: 'Pedidos', url: '/home', icon: 'archive' },
      { title: 'Cerrar Sesion', url: '/home', icon: 'log-out' },
  
    ];
  }
}
