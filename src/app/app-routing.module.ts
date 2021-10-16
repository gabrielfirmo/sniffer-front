import { ListaLogsComponent } from './lista-logs/lista-logs.component';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'cadastros',pathMatch: 'full'},
  {path: 'cadastros', component: ListaCadastrosComponent},
  {path: 'novo-cadastro', component: NovoCadastroComponent},
  {path: 'logs', component: ListaLogsComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)

export class AppRoutingModule{

}
