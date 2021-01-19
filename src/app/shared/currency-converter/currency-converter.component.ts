import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../services/currency.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencyForm: FormGroup;
  currencyList: string[] = [];
  availableCurrencies: any;

  constructor(private currencyServise: CurrencyService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getLatest();
    this.createForm();
  }

  getLatest(): void {
    this.currencyServise.getLatest().subscribe(res => {
      this.currencyList = ['EUR', ...Object.keys(res.rates)];
      this.availableCurrencies = {EUR: 1, ...res.rates};
    });
  }

  createForm(): void {
    this.currencyForm = this.fb.group({
      fromValue: [0],
      fromType: ['', [Validators.required]],
      toValue: [0],
      toType: ['', [Validators.required]],
      coefficient: [null]
    });
  }

  get valueForOneItem(): number {
    return Math.round(this.currencyForm.get('coefficient').value * 1000000) / 1000000 + this.currencyForm.get('toType').value;
  }

}
