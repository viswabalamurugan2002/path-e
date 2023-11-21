import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './users/logout/logout.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { WelcomeComponent } from './landingPage/welcome/welcome.component';
import { HeaderComponent } from './landingPage/header/header.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './users/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ChangePasswordComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
