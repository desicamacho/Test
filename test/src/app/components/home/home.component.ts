import { Component, OnInit } from '@angular/core';
import { ScrewsService } from '../../services/screws.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit{

  numberOfScrews : number = 0
  constructor(private screwService: ScrewsService) { }

  getNumberOfScrews(): void {
      this.screwService.getScrews().subscribe(res => {
          this.numberOfScrews = res.length;
      })
  }

  review(){}

  ngOnInit(): void {
    this.getNumberOfScrews();
  }
}
