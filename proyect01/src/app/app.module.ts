import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    MostrarListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
