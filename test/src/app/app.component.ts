import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';
  showLogin: boolean = true;
  userName: string = '';

  constructor(
    private cookie: CookieService,
    private router: Router
    ){}

  getCookie(){
    let user: any;
    if(this.cookie.get('User')){
      this.showLogin = false
      user = JSON.parse(this.cookie.get('User'))
      this.userName =  user.user;
    }
  }

  logOut(){
    this.cookie.delete('User');
    this.router.navigate(['']);
    this.showLogin = true
  }

  ngOnInit(): void {
    this.getCookie();
  }
}
