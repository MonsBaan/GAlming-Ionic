import { Component, OnInit } from '@angular/core';


export interface Mensajes
  {
    id:string;
    nombre:string;
    avatar:string;
    precio:string;
  }

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  mensajesMostrar = [];

  mensajeDesdeBD:Mensajes[] = [
    {
      id:'01',
      nombre:'Nintendo DS',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/e/e8/Nintendo-DS-Lite-w-stylus.png',
      precio:'85€'
    },
    {
      id:'02',
      nombre:'Nintendo Switch',
      avatar:'https://assets.nintendo.com/image/upload/ncom/en_US/switch/split-cta-system-mobile',
      precio:'260€'
    },
    {
      id:'03',
      nombre:'Play Station 3',
      avatar:'http://4.bp.blogspot.com/__j_LwpsJjMM/TI1ZTGocN2I/AAAAAAAAAAU/2RPQ2-Q7sKY/s1600/PS3-slim-console.png',
      precio:'220€'
    },
    {
      id:'04',
      nombre:'Play Station 4',
      avatar:'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
      precio:'450€'
    },
    {
      id:'05',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'06',
      nombre:'Xbox One',
      avatar:'https://media.game.es/COVERV2/3D_L/111/111801.png',
      precio:'420€'
    },
    {
      id:'07',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'08',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'09',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'10',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'11',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'12',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'13',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'14',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'15',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'16',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
    {
      id:'17',
      nombre:'Xbox 360',
      avatar:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Xbox-360S-Console-Set.png',
      precio:'210€'
    },
  ]

  constructor(){

   }

  ngOnInit()
  {

    this.mensajeDesdeBD.forEach((mensaje:Mensajes) => {
          this.mensajesMostrar.push(mensaje);
      });
    
  }

}

