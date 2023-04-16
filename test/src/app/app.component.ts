import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';
  showLogin: boolean = true;
  userName: string = '';
  constructor(private cookie: CookieService){}

  getCookie(){
    let user: any;
    if(this.cookie.get('User')){
      this.showLogin = false
      user = JSON.parse(this.cookie.get('User'))
      this.userName =  user.user;
    }
  }

  ngOnInit(): void {
    this.getCookie();
  }
}
