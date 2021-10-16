import { CadastroService } from './../services/cadastro.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.component.html',
  styleUrls: ['./lista-cadastros.component.scss']
})
export class ListaCadastrosComponent implements OnInit {

  @Input()  cadastros:any[] = [];
  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((cadastros: Cadastro[]) => {
      console.table(cadastros);
      this.cadastros = cadastros;
    });
  }

}
