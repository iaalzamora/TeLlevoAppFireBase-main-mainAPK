import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.page.html',
  styleUrls: ['./register-car.page.scss'],
})
export class RegisterCarPage implements OnInit {

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
