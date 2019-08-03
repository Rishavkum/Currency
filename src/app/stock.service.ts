import { Injectable } from '@angular/core';
import {Stock} from './stock';
import {STOCKS} from './sample-data';
@Injectable()
export class StockService {
  private currentStock: Stock;
  cuNameEntered(name: any): Stock{
    for(var i=0;i<STOCKS.length;i++){
      if(STOCKS[i].name==name)
      return STOCKS[i];
    }

  }

  constructor() { }

}
