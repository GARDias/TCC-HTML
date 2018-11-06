import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Filtro } from '../../model/Filtro';
import { Parametros } from '../../model/Parametros';
import { ParametrosService } from '../../service/parametros.service';

@Component({
  selector: 'app-parametro-sistema-form',
  templateUrl: './parametro-sistema-form.component.html',
  styleUrls: ['./parametro-sistema-form.component.css']
})
export class ParametroSistemaFormComponent implements OnInit {

  form: FormGroup;
  filtro : Filtro;

  constructor(private fb: FormBuilder, private service : ParametrosService) { }

  ngOnInit() {
    this.filtro = new Filtro();
    this.filtro.parametros = new Array<Parametros>();
    this.form = this.fb.group({
      concessao: [''], 
      grupo: [''], 
      parametros: this.fb.array([])
    });
  }

  adicionarLinha() {
    let params = this.form.get('parametros') as FormArray;
    params.push(this.criaLinha());
  }

  criaLinha(): FormGroup {
    return this.fb.group({
        descricao: [''], 
        sigla: [''], 
        valor: [''], 
        ativo: [''], 
        editando: [true]
    });
  }

  editar(param: FormGroup): void {
    param.get('editando').setValue(true);
  }

  salvar(param: FormGroup): void {
    param.get('editando').setValue(false);
  }

  concluir() {
    this.filtro = this.form.value;
    
    console.log(this.form.value);
  }

}
