import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const AUTHORITIES_KEY ='AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService implements CanActivate {

  public getRole:string="http://localhost:3000/api/auth/getRoleUtilisateur/"

  private roles: Array<string>=[];

  constructor(private router: Router,private httpClient:HttpClient) { }
  signOut() {
    return window.sessionStorage.clear(); 
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
     return new Promise((resolve)=>{
       if(sessionStorage.getItem(TOKEN_KEY))
      resolve(true)
      else{
        this.router.navigate(['login']);
      }
     })     
  }
}
