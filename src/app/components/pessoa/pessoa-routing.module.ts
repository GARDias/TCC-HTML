import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './list/pessoa-list.component';
import { PessoaFormComponent } from './form/pessoa-form.component';

const routes: Routes = [
  { path: '', component: PessoaListComponent }, 
  { path: 'create', component: PessoaFormComponent }, 
  { path: 'edit/:cpf', component: PessoaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
