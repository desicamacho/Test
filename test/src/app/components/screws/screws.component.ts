import { Component, OnInit } from '@angular/core';
import { ScrewsService } from '../../services/screws.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-screws',
  templateUrl: './screws.component.html',
  styleUrls: ['./screws.component.scss']
})
export class ScrewsComponent implements OnInit{

  //Listas
  formats: any[] = [{ id: 0, worth: 'black' }, { id: 2, worth: 'orange' }, { id: 3, worth: 'azure' }];
  screws: any[] = [];

  //Objeto
   screw = {
    name: undefined,
    price: undefined,
    brand: undefined,
    format: undefined

  }
  //Cargar pantalla
  loading: boolean = false;

  constructor(
    public screwService: ScrewsService, 
    public modalService: ModalService
  ){}
  
  //Obtener los tornillos para mostrarlos en el listado.
  getScrews(): void {
   this.screwService.getScrews().subscribe(res => {
    if (res != null && res != undefined) {
      this.screws = res;

      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  })
  }

  //Añadir el nuevo tornillo
  addScrew(): void{
    this.screws.unshift({name: this.screw.name, price: this.screw.price, brand: this.screw.brand, format: this.screw.format})
    this.modalService.close();
  }

  //Eliminar un tornillo
  deleteScrew(index: number): void{
    this.screws.splice(index,1);
  }

  ngOnInit(): void {
    this.getScrews()
  }

}
