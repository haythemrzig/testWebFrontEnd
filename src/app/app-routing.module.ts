import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';


const routes: Routes = [
  { path:'login',component:LoginComponent,canActivate:[UserService]},
  { path:'inscription',component:InscriptionComponent,canActivate:[UserService] },
  { path:'accueil',component:AccueilComponent,canActivate:[TokenStorageService] },
  { path:'listUser',component:ListUserComponent,canActivate:[TokenStorageService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
