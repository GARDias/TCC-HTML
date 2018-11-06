import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Response } from '@angular/http';

const URL: string = 'http://localhost:8080/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseService<Pessoa, string> {

  constructor(
    http:HttpClient
  ) { 
    super(URL, http)
  }

  protected extractData(res: Response) {
    return res;
  }

}
