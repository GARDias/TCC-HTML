import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametroSistemaListComponent } from './list/parametro-sistema-list.component';
import { ParametroSistemaFormComponent } from './form/parametro-sistema-form.component';

const routes: Routes = [
  {path: '', component: ParametroSistemaListComponent}, 
  {path: 'create', component: ParametroSistemaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametroSistemaRoutingModule { }
