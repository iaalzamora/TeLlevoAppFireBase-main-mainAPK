import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name: string = '';
  age: number | null = null;
  users$: Observable<any[]>;


  data = {
    user: "",
    pw: ""
  };

  constructor(private nCtrl: NavController, private toastController: ToastController, private userService:UserService) { 
    this.users$ = this.userService.getUser();
  }

  addUser(){
    if (this.name && this.age !== null){
      this.userService.addUser(this.name, this.age).then(() => {
        console.log('User added successfully!')
      })
    }
  }

  async logout() {
    // Limpiar datos de sesión
    this.data.user = "";
    this.data.pw = "";

    // Redirigir al login
    await this.nCtrl.navigateRoot('/login');

    // Mostrar un mensaje de confirmación
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Sesión cerrada exitosamente.',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
  
}