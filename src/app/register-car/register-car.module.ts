import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCarPageRoutingModule } from './register-car-routing.module';

import { RegisterCarPage } from './register-car.page';
import { CarsComponent } from '../components/cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCarPageRoutingModule
  ],
  declarations: [RegisterCarPage, CarsComponent]
})
export class RegisterCarPageModule {}
