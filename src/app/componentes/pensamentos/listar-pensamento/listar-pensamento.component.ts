import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Angular salve salve familia',
      autoria: 'Meu nome',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
