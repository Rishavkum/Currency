import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StockService} from './stock.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
