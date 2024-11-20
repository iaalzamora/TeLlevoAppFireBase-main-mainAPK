import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: string = '';

  constructor() { }

  setUser(user: string) {
    this.userData = user;
  }

  getUser(): string {
    return this.userData;
  }
}
