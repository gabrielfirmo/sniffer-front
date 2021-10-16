import { Cadastro } from './../models/cadastro.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private listaCadastro: any[] = [];
  private url = "http://sniffer-esp.herokuapp.com/macs"

constructor(private httpClient: HttpClient) {
  this.listaCadastro = [];
}

  get cadastros(){
    return this.listaCadastro;
  }

  cadastrar(cadastro: Cadastro): Observable<Cadastro>{
    return this.httpClient.post<Cadastro>(this.url, cadastro);
  }

  todas(): Observable<Cadastro[]>{
    return this.httpClient.get<Cadastro[]>(this.url)
  }
}



