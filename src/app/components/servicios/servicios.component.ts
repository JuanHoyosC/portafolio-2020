import { Component} from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent{

  constructor() { }

  abrir(card): void {
    this.animar('transition-card', 'transition-card-reverse', card);
  }

  cerrar(card): void {
    this.animar('transition-card-reverse', 'transition-card', card);
  }

animar(agregar, eliminar, card) :void{
    document.getElementById(card).classList.add(agregar);
    document.getElementById(card).classList.remove(eliminar);
  }

}
