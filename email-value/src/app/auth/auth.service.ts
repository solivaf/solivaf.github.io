import { Injectable } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService {

  private loggedIn = false;

  constructor() { }

  isValidEmailAndPassword(email: string, password: string) {
    if (email === 'test@test.com' && password === 'test123') {
      Cookie.set('authentication-activate', email + '-' + btoa(password));
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  isAuthenticated() {
    const auth = Cookie.get('authentication-activate');
    if (auth !== null) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

}
