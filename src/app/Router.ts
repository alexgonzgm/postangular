import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"detalles/:id" , component:DetallesComponent},
  {path:"actualizar/:id" , component:ActualizarComponent},
  {path:"borrar/:id" , component:BorrarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
