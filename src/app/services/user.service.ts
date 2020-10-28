import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{
  public host:string="http://localhost:3000/api/auth/";
  public user:string="http://localhost:3000/getAllUser";

  constructor(private httpClient:HttpClient,private router: Router) { }

  public add(user){
    return this.httpClient.post<any>(this.host+"signup",user);
  }
  login(credentials): Observable<any> {
    return this.httpClient.post(this.host+"signin", {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  public getAll(){
    return this.httpClient.get<any>(this.user);
  }
  public deleteUser(id):Observable<void>{
    return this.httpClient.delete<void>(this.user+"/"+id);
  }
  public canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    return new Promise((resolve)=>{
      if(sessionStorage.getItem(TOKEN_KEY))
      this.router.navigate(['accueil']);
      
     else{
      resolve(true) 
     }
    })     
 }
}
