import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';

const routes: Routes = [
  {path:'', component: MostrarListaComponent},
  {path:'crear-producto',component: CrearProductoComponent},
  {path:'editar-producto/id:', component: CrearProductoComponent},
  {path:'**',pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
