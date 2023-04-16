import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NgFallimgModule } from 'ng-fallimg';
import { ButtonModule } from 'primeng/button';
import { ScrewsComponent } from './components/screws/screws.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { TableModule } from 'primeng/table';
import { ModalComponent } from './components/modal/modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrewsComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    InputNumberModule,
    NgFallimgModule.forRoot({
      default: '/assets/fallingPicture.png'
    })
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
