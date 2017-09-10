import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  redirectUrl: string;
  isLoggedIn: boolean;

  constructor() {
    console.log('creating the authService');
  }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(value => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
