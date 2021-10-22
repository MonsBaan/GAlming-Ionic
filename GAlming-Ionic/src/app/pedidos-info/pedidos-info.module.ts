import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosInfoPageRoutingModule } from './pedidos-info-routing.module';

import { PedidosInfoPage } from './pedidos-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosInfoPageRoutingModule
  ],
  declarations: [PedidosInfoPage]
})
export class PedidosInfoPageModule {}
