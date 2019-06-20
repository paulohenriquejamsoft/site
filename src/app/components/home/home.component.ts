import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getTexto() {
    const textoFicticio = [];
    for (let i = 0; i < 100; i++) {
      textoFicticio.push('Texto em looping vindo do arquivo: Home.component.ts :)');
    }
    return textoFicticio;
  }

}
