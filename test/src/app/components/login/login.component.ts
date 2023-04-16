import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
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
    ){}
  saveUser(){
    const user = { user: this.user, password: this.password };
    this.cookie.set('User',JSON.stringify(user));
    this.router.navigate(['/screws' ]);
  }

  ngOnInit(): void {
    if(this.cookie.get('User')){
      this.router.navigate(['/screws' ]);
    }
  }
}
