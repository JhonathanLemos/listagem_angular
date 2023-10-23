import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './components/produto/produto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutoComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'clientes/:id', component: ClienteFormComponent},
  {path: 'clientes/add', component: ClienteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
