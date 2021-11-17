import { PerfilService } from './../servicios/perfil.service';
import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { modalController } from '@ionic/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  modo = true;

  /** DATOS  */
  public usuario = {
    usuDni: "",
    usuNombre: "",
    usuApellido1: "",
    usuApellido2: "",
    usuDireccion: '',
    usuPass: '',
    usuEmail: '',
    usuFoto: '',
    usuCiudad: ''
  };

  constructor(private perfilService: PerfilService, public loadingController: LoadingController,  private router: Router, public alertController: AlertController) { }

  async cargarPerfil() {

    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();
    await this.perfilService.cargarPerfil(this.usuario)
    .subscribe(res => {
      loading.dismiss();
      if (res[0] == 0 || res[0] == null) {
        alert("Usuario inexistente")
      }
      else{
      this.usuario = res[0];
      }
    }, err => {
      console.log(err);
      loading.dismiss();
    }

  )};

  ngOnInit() {

  }

  ionViewDidEnter() {
    if(localStorage.getItem("login") == "0") {
      this.router.navigateByUrl('/home');
    }

    this.cargarPerfil();
  }

  mostrar() {
    this.modo = false
  }

  enviar() {
    this.modo = true
    console.log(this.usuario);
    this.perfilService.actualizarPerfil(this.usuario)
    .subscribe(res=>{
      console.log(res);
      this.usuario = res;
    }, err =>{
      console.log(err);
    })
    this.cargarPerfil();
  }

  async eliminarUsu() {
    await this.perfilService.eliminarUsu(localStorage.getItem("usuId"))
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/cerrar-sesion');
    }, err => {
      console.log(err);
    }
  )};

  eliminar() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar',
      message: '¿Esta seguro que quiere eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Eliminar',
          handler: () => {
            this.eliminarUsu();
          }
        }
      ]
    });

    await alert.present();
  }
}
