import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public investiments:Array<Investiments> = [
    {
      name : "Itaú", value: 100
    },
    {
      name : "Banco do Brasil", value: 200
    },
    {
      name : "Nubank", value: 300
    },
    {
      name : "Inter", value: 400
    },
  ];


  ngOnInit(): void {

  }

  constructor() { }
} 
