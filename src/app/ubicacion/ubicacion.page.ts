import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UbicacionService } from '../services/ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  ubicacion: any;

  constructor(
    private toastController: ToastController,
    private ubicacionService: UbicacionService
  ) {}

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  ngOnInit() {
    // Puedes mantener esta llamada si deseas una ubicación inicial.
    this.obtenerUbicacion('1600 Amphitheatre Parkway, Mountain View, CA');
  }

  obtenerUbicacion(direccion: string) {
    this.ubicacionService.getUbicacion(direccion).subscribe(
      (data) => {
        this.ubicacion = data.results[0];
      },
      (error) => {
        console.error('Error obteniendo ubicación:', error);
      }
    );
  }

  obtenerUbicacionActual() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Llamada a la API con las coordenadas actuales
          this.ubicacionService.getUbicacionPorCoordenadas(lat, lng).subscribe(
            (data: { results: any[]; }) => {
              this.ubicacion = data.results[0]; // Muestra el primer resultado
            },
            (error: any) => {
              console.error('Error obteniendo ubicación por coordenadas:', error);
              this.mostrarToast('No se pudo obtener la ubicación.');
            }
          );
        },
        (error) => {
          console.error('Error obteniendo la ubicación actual:', error);
          this.mostrarToast('No se pudo obtener tu ubicación.');
        }
      );
    } else {
      this.mostrarToast('Geolocalización no es soportada por el navegador.');
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
