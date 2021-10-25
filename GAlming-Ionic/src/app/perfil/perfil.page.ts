import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit
{
  modo = true;
  constructor(){ }
  
  /** DATOS  */
  usuario = {nombre:"Mario" , 
             apellido1:"Torres",
             apellido2:"Cid",
             contrasena:'Almi123',
             dni:'574625434K',
             direccion:'Colon 22',
             email:'Mario@gmail.com',
             ciudad:'Bilbao'
            };

  ngOnInit()
  {

  }

  mostrar()
  {
    this.modo = false
  }

  enviar()
  {
    this.modo = true
    
  }
}
