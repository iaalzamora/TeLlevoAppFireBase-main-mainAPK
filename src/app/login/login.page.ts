import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Importa AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data = {
    user: "",
    pw: "",
  };

  constructor(
    private nCtrl: NavController,
    private toastController: ToastController,
    private authService: AuthService  // Agrega AuthService al constructor
  ) { }

  async goHome() {
    if (!this.data.user || !this.data.pw) {
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Por favor, complete todos los campos.',
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
      return;
    }

    // Verificación de credenciales de administrador
    if (this.data.user === 'admin' && this.data.pw === 'admin') {
      // Navega a la página gestion-usuario
      await this.nCtrl.navigateForward(['/gestion-usuario']);
      return;
    }

    try {
      // Procede con el inicio de sesión normal si no es admin
      await this.authService.login(this.data.user, this.data.pw);
      let nExtras: NavigationExtras = {
        queryParams: {
          data1: this.data.user,
          data2: this.data.pw
        }
      };
      await this.nCtrl.navigateForward(['/home'], nExtras);
    } catch (error: any) { // Usa 'any' para evitar el error
      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Error de autenticación: ' + error.message,
        duration: 2000,
        position: 'bottom'
      });
      await toast.present();
    }
  }

  goResetPassword() {
    this.nCtrl.navigateForward('/reset-password');
  }

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  ngOnInit() { }
}
