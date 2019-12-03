import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarDiscoPageRoutingModule } from './editar-disco-routing.module';

import { EditarDiscoPage } from './editar-disco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDiscoPageRoutingModule
  ],
  declarations: [EditarDiscoPage]
})
export class EditarDiscoPageModule {}
