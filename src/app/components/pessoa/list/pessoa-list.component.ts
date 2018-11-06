import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { MessageService } from 'src/app/core/message/message.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  list: Pessoa[];

  constructor(
    private service: PessoaService, 
    public message: MessageService
  ) { }

  ngOnInit() {
    this.buscar();
  }

  private buscar(): void {
    this.service.get()
                .subscribe(pessoas => this.list = pessoas);
  }

  acaoDeletar(cpf: string): void {
    this.service.delete(cpf).subscribe(
      () => this.buscar()
    );
  }

}
