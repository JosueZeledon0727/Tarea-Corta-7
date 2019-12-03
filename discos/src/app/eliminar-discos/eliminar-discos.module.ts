import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarDiscosPageRoutingModule } from './eliminar-discos-routing.module';

import { EliminarDiscosPage } from './eliminar-discos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarDiscosPageRoutingModule
  ],
  declarations: [EliminarDiscosPage]
})
export class EliminarDiscosPageModule {}
