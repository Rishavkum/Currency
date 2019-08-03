import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';
import { Stock } from '../stock';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private currentStock:Stock;
  private pastStocks:Stock[]=[];

  constructor(private stockservice:StockService ) { }

  ngOnInit() {
  }
  getCu(name : any):void{
    this.currentStock=this.stockservice.cuNameEntered(name);
    this.currentStock.searchTime=(new Date()).toUTCString();
    this.pastStocks.push(this.currentStock);

  }

  getCuu(name : any):void{
    alert("Prediction of "+this.currentStock.name+" currency :- "+this.currentStock.value);

  }

}
