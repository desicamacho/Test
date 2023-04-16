import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user: string = '';
  password: string = '';

  constructor(
    private cookie: CookieService,
    private router: Router,
    private app: AppComponent
    ){}
  saveUser(){
    if(this.user != '' && this.password != ''){
      const user = { user: this.user, password: this.password };
      this.cookie.set('User',JSON.stringify(user));
      this.app.getCookie();
      this.router.navigate(['/screws' ]);
    }else{
      alert('Porfavor escriba usuario y contraseña')
    }
  }

  ngOnInit(): void {
    if(this.cookie.get('User')){
      this.router.navigate(['/screws' ]);
    }
  }
}
