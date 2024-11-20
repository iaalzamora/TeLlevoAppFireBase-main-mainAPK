import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarPageRoutingModule } from './list-car-routing.module';

import { ListCarPage } from './list-car.page';
import { ListaCarsComponent } from '../components/lista-cars/lista-cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarPageRoutingModule
  ],
  declarations: [ListCarPage, ListaCarsComponent]
})
export class ListCarPageModule {}
