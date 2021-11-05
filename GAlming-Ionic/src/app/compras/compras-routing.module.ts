import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasPage } from './compras.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasPage
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'alquiler',
    loadChildren: () => import('./alquiler/alquiler.module').then( m => m.AlquilerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprasPageRoutingModule {}
