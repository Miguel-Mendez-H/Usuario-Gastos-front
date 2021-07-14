import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {usuariosComponent} from './Usuarios/usuarios.component'
import {gastosComponent} from './gastos/gastos.component'

const routes: Routes = [
{path: 'first-component', component: usuariosComponent},
{path:'second-component', component: gastosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
