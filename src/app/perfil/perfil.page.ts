import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userEmail: string | null = null;
  mail: string = ''; // Inicializa como un string vacío

  constructor(private authService: AuthService, private toastController: ToastController) {}

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  ngOnInit() {
    this.getUserEmail();
    this.loadEmail(); // Cargar el email en el ngOnInit
  }

  getUserEmail() {
    this.authService.getUser().subscribe(
      user => {
        if (user && user.email) {
          this.userEmail = user.email.split('@')[0].toUpperCase();
        } else {
          console.error('No se encontró el usuario o el correo electrónico.');
        }
      },
      error => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  loadEmail() {
    const email = sessionStorage.getItem('loggedInUser'); // Obtener el email del sessionStorage
    if (email) {
      this.mail = email;
    } else {
      console.warn('No se encontró el correo en sessionStorage.');
    }
  }
}
