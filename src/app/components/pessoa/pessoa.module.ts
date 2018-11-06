import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaFormComponent } from './form/pessoa-form.component';
import { PessoaListComponent } from './list/pessoa-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppBootstrapModule } from '../app-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule, 
    FormsModule,

    SharedModule, 
    AppBootstrapModule
  ],
  declarations: [PessoaFormComponent, PessoaListComponent]
})
export class PessoaModule { }
