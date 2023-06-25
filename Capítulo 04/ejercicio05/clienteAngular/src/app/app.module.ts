import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RedesComponent } from './redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CabeceraComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
