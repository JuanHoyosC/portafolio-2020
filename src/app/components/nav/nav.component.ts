import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

constructor(private elRef: ElementRef) { }



closeOpen: number = 0

abrir(): void {
 
  if(this.closeOpen % 2 === 0) this.añadirClass()
  
  if(this.closeOpen % 2 !== 0) this.removerClass()
   
  this.closeOpen++
}

cerrar(): void {
    this.removerClass()
    this.closeOpen = 2
}

  
añadirClass(): void {
   for (let index = 0; index < this.elRef.nativeElement.querySelector('#navegacion-portafolio__lista').childElementCount; index++) {
          this.elRef.nativeElement.querySelector('#navegacion-portafolio__lista').children[index].classList.add('responsive_item'); 
    }
}


  
removerClass(): void {
      for (let index = 0; index < this.elRef.nativeElement.querySelector('#navegacion-portafolio__lista').childElementCount; index++) {
          this.elRef.nativeElement.querySelector('#navegacion-portafolio__lista').children[index].classList.remove('responsive_item');
      }
}
  
  
  

}
