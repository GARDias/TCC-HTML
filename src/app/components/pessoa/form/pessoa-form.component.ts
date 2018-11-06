import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../model/pessoa.model';
import { MessageService } from 'src/app/core/message/message.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  //utilizado na alteração
  isAlteracao: boolean = false;

  pessoa: Pessoa = new Pessoa();

  constructor(
    private route: ActivatedRoute, 
    private service: PessoaService, 
    public message: MessageService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.message.clearMessage();
    let cpf = this.route.snapshot.params['cpf'];
    if (cpf) {//é uma alteração?
      this.isAlteracao = true;
      this.getPessoaPorCpf(cpf);
    }
  }

  getPessoaPorCpf(cpf: string) {
    this.service.findOne(cpf)
                .subscribe(p => this.pessoa = p);
  }

  salvar(): void {
    if (this.isAlteracao) {
      this.service.update(this.pessoa.cpf, this.pessoa).subscribe(() => {
        this.message.sendMessageSuccess('Alterado com sucesso');
        this.router.navigate(['/pessoa']);
      });
      
    } else {
      this.service.save(this.pessoa).subscribe(() => {
        this.message.sendMessageSuccess('Salvo com sucesso');
        this.router.navigate(['/pessoa']);
      });
    }
  }

}
