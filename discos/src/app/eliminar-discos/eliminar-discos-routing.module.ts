import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarDiscosPage } from './eliminar-discos.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarDiscosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarDiscosPageRoutingModule {}
