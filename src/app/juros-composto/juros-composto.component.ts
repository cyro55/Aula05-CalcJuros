import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
})
export class JurosCompostoComponent implements OnInit {
  valor:number = 0;
  taxa:number = 0;
  tempo:number = 0;
  list: number[] = [];

  constructor() {}

  ngOnInit() {}

  calcJurosComposto() {
    this.list=[];
    let juros = this.taxa /100;
    for (let x = 1; x <= this.tempo; x++) {
     this.list.push ((this.valor * Math.pow(1+ juros, x)));
    }
  }
}
