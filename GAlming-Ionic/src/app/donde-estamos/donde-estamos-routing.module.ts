import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DondeEstamosPage } from './donde-estamos.page';

const routes: Routes = [
  {
    path: '',
    component: DondeEstamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DondeEstamosPageRoutingModule {}
