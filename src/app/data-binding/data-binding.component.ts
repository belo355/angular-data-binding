import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'google.com.br';
  cursoAngular: boolean = true;

  imgQualquer = 'https://picsum.photos/id/237/200/300';

  getValor(){
    return 1;
  }

  getCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}