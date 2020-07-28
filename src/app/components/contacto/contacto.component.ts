import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private elRef: ElementRef) { }

  enviarMensaje(): void {

    //Redireccionar
    const mensaje = this.elRef.nativeElement.querySelector('#contacto__mensaje').value.split(' ').join('%20');
    const url = `https://api.whatsapp.com/send?phone=573022135761&text=${mensaje}`;
    window.open(url, "_blank");

    //Animar
    this.elRef.nativeElement.querySelector('#saludo').classList.add('saludar');
  }

}
