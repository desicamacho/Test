import { Component, OnInit } from '@angular/core';
import { ScrewsService } from '../../services/screws.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit{

  numberOfScrews : number = 0

  constructor(
    private screwService: ScrewsService,
    private router: Router,
    private cookie: CookieService
    ) { }

  //Obtener el numero de tornillos totales.
  getNumberOfScrews(): void {
      this.screwService.getScrews().subscribe(res => {
          this.numberOfScrews = res.length;
      })
  }

  //Revisamos si hay inción de sesión
  review(){
    if(this.cookie.get('User')){
      this.router.navigate(['/screws' ]);
    }else{
      this.router.navigate(['/login' ]);
    }
  }

  ngOnInit(): void {
    this.getNumberOfScrews();
  }
}
