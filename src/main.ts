import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { StockModule } from './stock/stock.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, StockModule],
  template: `
    <app-stock></app-stock>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

//  Use Angular to build the following web page with the following requirements:
// You can only click one from buy and sell buttons, and one from shares and dollars buttons. Cannot click buy and sell at the same time. Cannot click shares and dollars at the same time.
// After submitting the form, a summary should be displayed below in the form of “action quantity unit of stock symbol”, such as “Buying 1000 dollars of Walmart”.
