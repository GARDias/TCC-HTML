import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parametros } from '../model/Parametros';
import { Filtro } from '../model/Filtro';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8080/Parametros';
@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http : HttpClient) { }

  inserir(filtro : Filtro):Observable<Filtro>{
    return this.http.post<Filtro>(URL,filtro);
  }
}
