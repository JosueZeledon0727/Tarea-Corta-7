import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesDiscoPageRoutingModule } from './detalles-disco-routing.module';

import { DetallesDiscoPage } from './detalles-disco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesDiscoPageRoutingModule
  ],
  declarations: [DetallesDiscoPage]
})
export class DetallesDiscoPageModule {}
