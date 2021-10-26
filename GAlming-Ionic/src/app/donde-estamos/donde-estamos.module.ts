import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DondeEstamosPageRoutingModule } from './donde-estamos-routing.module';

import { DondeEstamosPage } from './donde-estamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DondeEstamosPageRoutingModule
  ],
  declarations: [DondeEstamosPage]
})
export class DondeEstamosPageModule {}
