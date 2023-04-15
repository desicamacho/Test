import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ScrewsService } from './screws.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NgFallimgModule } from 'ng-fallimg';
import { MatButtonModule } from '@angular/material/button';
import { ScrewsComponent } from './screws/screws.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrewsService,
    ScrewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgFallimgModule.forRoot({
      default: '/assets/fallingPicture.png'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
