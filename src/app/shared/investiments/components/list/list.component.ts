import { ListInvestimentsService } from './../../services/list-investiments.service';
import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public investiments!:Array<Investiments>;

  constructor(private listInvestimentsService : ListInvestimentsService) { }

  ngOnInit(): void {
     this.listInvestimentsService
     .list()
     .subscribe((res) => (this.investiments = res)
    );
  }

} 
