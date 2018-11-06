import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametroSistemaRoutingModule } from './parametro-sistema-routing.module';
import { ParametroSistemaFormComponent } from './form/parametro-sistema-form.component';
import { ParametroSistemaListComponent } from './list/parametro-sistema-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ParametroSistemaRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [ParametroSistemaFormComponent, ParametroSistemaListComponent]
})
export class ParametroSistemaModule { }
