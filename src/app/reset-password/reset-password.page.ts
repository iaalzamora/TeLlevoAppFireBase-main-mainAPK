import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string = '';
  

  constructor(private aRout: ActivatedRoute,
    private toastController: ToastController,
    private authService: AuthService) { }

    async mostrarMensajeRedNoDisponible() {
      const toast = await this.toastController.create({
        message: 'Aún no tenemos esta red :D',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    }

    async resetPassword() {
      try {
        const message = await this.authService.resetPassword(this.email);
        alert(message);
      } catch (error) {
        console.error('Error con restablecer contraseña', error);
        alert('Correo Invalido. Por favor comprueba tu direccion');
      }
    }

  ngOnInit() {
  }

}
