import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Router';
import { AppComponent } from './app.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { MiservicioService } from './services/miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarComponent,
    BorrarComponent,
    DetallesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
