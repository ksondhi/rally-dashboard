import { LoginModel } from './login.model';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rally-dashboard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  model: LoginModel;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.model = new LoginModel();
  }

  onSubmit() {
    console.log('submit called');
    this.authService.login().subscribe( loggedIn => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/secure/home';

        this.router.navigate([redirectUrl]);
      }
    });
  }
}
