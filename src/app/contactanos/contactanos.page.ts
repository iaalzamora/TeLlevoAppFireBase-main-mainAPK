import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  nombre: string = '';
  email: string = '';
  descripcion: string = '';

  constructor(private toastController: ToastController) { }

  async enviarFormulario(event: Event) {
    event.preventDefault();

    if (!this.nombre || !this.email || !this.descripcion) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Por favor, rellene todos los campos.',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Por favor, introduzca un email válido.',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
      return;
    }


    const toast = await this.toastController.create({
      color: 'success',
      message: 'Su mensaje se ha enviado correctamente',
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();
  }


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