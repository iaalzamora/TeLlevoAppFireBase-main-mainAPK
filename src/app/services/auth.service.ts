import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseError } from '@angular/fire/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 

  constructor(private afAuth:AngularFireAuth) {}

  async login(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  async register(email:string,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  async logout(email:string,password:string){
    return this.afAuth.signOut();
  }

  getUser(){
    return this.afAuth.user;
  }
  


  // Validar formato de correo electrónico

  validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  // Restablecer contraseña usando Firebase Authentication

  async resetPassword(email: string) {
    // Validar el formato del correo antes de
    if (!this.validateEmail(email)) {
      return Promise.reject('Por favor, introduce un email valido.');
    }

    try {
      // Intentar enviar el correo de restablecimiento de contraseña
      await this.afAuth.sendPasswordResetEmail(email);
      return 'El correo se encuentra registrado , se ha enviado un correo de restablecimiento.';
      
    } catch (error: unknown) {
      // Verificación de error como FirebaseError
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === 'auth/invalid-email') {
        return Promise.reject('¡ERROR!  Por favor, comprueba tu dirección de correo electrónico.');
      } else {
        return Promise.reject('Ocurrió un error al intentar restablecer contraseña.');
      }
    }
  }
}
