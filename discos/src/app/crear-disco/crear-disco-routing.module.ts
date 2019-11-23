import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDiscoPage } from './crear-disco.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDiscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDiscoPageRoutingModule {}
