import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUserComponent } from './components/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AccueilComponent,
    NavbarComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
