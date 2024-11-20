import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // username!: string; 
  // mail!: string;
  userEmail: string | null = null;

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) { }


  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  goToLogin() {
    this.router.navigate(['/list-car']);
  }

  ngOnInit() {
    this.getUserEmail();
  }

  getUserEmail() {
    this.authService.getUser().subscribe(user => {
      if (user && user.email) {
        this.userEmail = user.email.split('@')[0].toUpperCase();
      }
    });
  }
}









