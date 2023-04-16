import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrewsService {

  constructor(private http: HttpClient) { }

  //Función que obtiene los tornillos
  getScrews(){
    return this.http.get<any>('/assets/screws.json')
  }

}
