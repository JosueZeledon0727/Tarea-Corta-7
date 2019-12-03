import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDiscosPageRoutingModule } from './listar-discos-routing.module';

import { ListarDiscosPage } from './listar-discos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDiscosPageRoutingModule
  ],
  declarations: [ListarDiscosPage]
})
export class ListarDiscosPageModule {}
