import { AuthGuard } from './auth/auth.guard.service';
import { AppRoutingModule } from './app.routing.module';
import { RallyService } from './rally/rally.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './secure/home/home.component';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, RallyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
