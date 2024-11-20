import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from 'src/app/services/cars.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-cars',
  templateUrl: './lista-cars.component.html',
  styleUrls: ['./lista-cars.component.scss'],
})
export class ListaCarsComponent  implements OnInit {
  cars:Car[]=[]
  constructor(private carsService:CarsService, private alertController: AlertController) { }

  async pedirJuber() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Haz pedido el Juber.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.carsService.getCar().subscribe(cars =>{
      this.cars= cars;
    })
  }

}
