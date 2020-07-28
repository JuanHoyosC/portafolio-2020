import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-circular',
  templateUrl: './menu-circular.component.html',
  styleUrls: ['./menu-circular.component.css']
})
export class MenuCircularComponent {

  constructor(private elRef: ElementRef) { }


mostrarLista: number = 0;

abrirCerrar(): void {
  if (this.mostrarLista % 2 === 0){ 
      this.elRef.nativeElement.querySelector('#menu-circular__lista').style = 'transform: scale(1) rotateZ(360deg);';
      this.elRef.nativeElement.querySelector('#menu-circular__button').style = 'transform: translate(var(--mitad-lista),var(--mitad-lista)) rotateZ(0deg);';

    }else{
        this.elRef.nativeElement.querySelector('#menu-circular__lista').style = ' transform: scale(0) rotateZ(0deg);';
        this.elRef.nativeElement.querySelector('#menu-circular__button').style = 'transform: translate(var(--mitad-lista),var(--mitad-lista)) rotateZ(-45deg);';
    }
    this.mostrarLista++;
}



}
