import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDiscoPage } from './editar-disco.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDiscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDiscoPageRoutingModule {}
