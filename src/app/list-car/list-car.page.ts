import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.page.html',
  styleUrls: ['./list-car.page.scss'],
})
export class ListCarPage implements OnInit {

  constructor(private toastController: ToastController) { }

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  ngOnInit() {
  }

}
