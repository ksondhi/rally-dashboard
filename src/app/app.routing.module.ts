import { AuthGuard } from './auth/auth.guard.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from './secure/home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
      path: 'secure',
      component: SecureComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          canActivateChild: [AuthGuard],
          children: [
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', redirectTo: 'home', pathMatch: 'full'},
          ],
        }
      ]
    },
    { path: '', redirectTo: 'secure', pathMatch: 'full'},
    { path: '**', redirectTo: 'secure', pathMatch: 'full'}
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
