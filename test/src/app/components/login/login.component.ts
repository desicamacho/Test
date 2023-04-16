import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private cookie: CookieService){}
  saveUser(){
    const user = { user: this.user, password: this.password };
    this.cookie.set('User',JSON.stringify(user));
  }
}
