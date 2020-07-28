import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor() { }

  texto: string = 'Bienvenido, soy Juan Carlos Hoyos.';
  contadorPalabras: number = 1;
  
  interval = setInterval(() => {
    document.getElementById('banner-portafolio__title').innerHTML = this.texto.substr(0, this.contadorPalabras) + '|';
    if (this.contadorPalabras === this.texto.length) this.contadorPalabras = 0
    this.contadorPalabras++
  }, 200);

}
