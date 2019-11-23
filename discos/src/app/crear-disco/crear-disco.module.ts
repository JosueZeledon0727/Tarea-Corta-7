import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDiscoPageRoutingModule } from './crear-disco-routing.module';

import { CrearDiscoPage } from './crear-disco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDiscoPageRoutingModule
  ],
  declarations: [CrearDiscoPage]
})
export class CrearDiscoPageModule {}
