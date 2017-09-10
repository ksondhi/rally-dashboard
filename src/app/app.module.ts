import { FormsModule } from '@angular/forms';
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
import { TestComponent } from './secure/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SecureComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, RallyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
