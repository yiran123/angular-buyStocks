import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit, OnChanges {
  stockForm: FormGroup;
  buy: boolean = true;
  share: boolean = true;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.submitted = false;
  }

  ngOnInit() {
    this.stockForm = this.fb.group({
      symbol: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  get symbol() {
    return this.stockForm.get('symbol');
  }

  get quantity() {
    return this.stockForm.get('quantity');
  }

  inEdit() {
    this.submitted =false;
  }

  onBuySell(buy: boolean) {
    this.submitted = false;
    if (buy) {
      this.buy = true;
    } else {
      this.buy = false;
    }
  }

  onShareDollar(share: boolean) {
    this.submitted = false;
    if (share) {
      this.share = true;
    } else {
      this.share = false;
    }
  }

  onSubmit() {
    this.submitted = true;
  }
}
