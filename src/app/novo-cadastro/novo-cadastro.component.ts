import { Cadastro } from './../models/cadastro.model';
import { CadastroService } from './../services/cadastro.service';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector:'app-novo-cadastro',
  templateUrl:'./novo-cadastro.component.html',
  styleUrls:['./novo-cadastro.component.scss']
})
export class NovoCadastroComponent{

  @Output() aoCadastrar = new EventEmitter<any>();
  nome: string = "";
  mac: string = "";


  constructor(private service:CadastroService, private router: Router){

  }
  cadastrar(){
    const valorEmitir:Cadastro = {nome:this.nome, mac:this.mac};
    this.service.cadastrar(valorEmitir).subscribe(resultado =>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('cadastros');
    },
    error => console.log(error)
    );
  }

  limparCampos(){
    this.nome = "";
    this.mac = "";
  }
}
