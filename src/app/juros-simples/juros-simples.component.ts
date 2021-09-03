import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
})
export class JurosSimplesComponent implements OnInit {
  valor:number = 0;
  taxa:number = 0;
  tempo:number = 0;
  list: number[] = [];

  constructor() {}

  ngOnInit() {}

  calcJurosSimples() {
    this.list=[];
    let juros = this.taxa /100;
    for (let x = 1; x <= this.tempo; x++) {
     this.list.push (this.valor*( 1+ juros * x));
    }
  }
}