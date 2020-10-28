import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage;
  constructor(private tokenStorage: TokenStorageService,private service: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f) {
    console.log(f);
    this.service.login(f).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
  
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.lienmenu();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
    lienmenu(){
      this.router.navigate(['accueil']);
    }


}
