import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesDiscoPage } from './detalles-disco.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesDiscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesDiscoPageRoutingModule {}
