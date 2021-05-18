import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuCircularComponent } from './components/menu-circular/menu-circular.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    MenuCircularComponent,
    ServiciosComponent,
    FooterComponent,
    ContactoComponent,
    TrabajosComponent,
    ConocemeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
