import { PerfilService } from './../servicios/perfil.service';
import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { modalController } from '@ionic/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  modo = true;


  /** DATOS  */
  public usuario = {
    usuDni: "574625434K",
    usuNombre: "Mario",
    usuApellido1: "Torres",
    usuApellido2: "Cid",
    usuDireccion: 'Colon 22',
    usuPass: 'Almi123',
    usuEmail: 'Mario@gmail.com',
    usuFoto: 'FOTO',
    usuCiudad: 'Bilbao'
  };

  constructor(private perfilService: PerfilService, public loadingController: LoadingController) { }

  async cargarPerfil() {
    localStorage.setItem('usuId', "4");

    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await loading.present();
    await this.perfilService.cargarPerfil(this.usuario)
    .subscribe(res => {
      console.log(res[0]);
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
}
