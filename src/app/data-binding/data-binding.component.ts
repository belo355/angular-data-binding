import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'google.com.br';
  cursoAngular: boolean = true;
  valorAtualInput: string = '';
  valorSalvo: string ='';
  nome: string = 'abc';
  nameCurso: string = 'Angular2';

  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }

  pessoa: any = {
    name: 'def',
    idade: 19
  }

  imgQualquer = 'https://picsum.photos/id/237/200/300';

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 1;
  }

  getCurso(){
    return true;
  }

  botaoCliclado(){
    return alert('Botao clicado');
  }

  onKeyUp(evento:KeyboardEvent): any {
    this.valorAtualInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }
}
