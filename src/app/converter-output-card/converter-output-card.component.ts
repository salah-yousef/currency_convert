import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter-output-card',
  templateUrl: './converter-output-card.component.html',
  styleUrls: ['./converter-output-card.component.scss']
})
export class ConverterOutputCardComponent implements OnInit {
  currencies: string[] = [];
  latestExchangeRates : any;
  symbols: any;
  baseCurrency: string = "EUR";
  resultCurrency: string = "TRY";
  baseValue: number = 0;
  resultValue: number = 0;
  currectDate = '';
  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
    this.getLatestExchangeRates(1);
    this.getLatestExchangeSymbols();
  }

  getLatestExchangeRates(direction: number) {
    this.converterService.getLatestExchangeRates(this.baseCurrency).subscribe(res => {
      this.currencies = Object.keys(res.rates);
      this.latestExchangeRates = res.rates;
      if (direction === 1) {
        this.convert();
      } else {
        this.reverseConvert();
      }
    });
  }

  getLatestExchangeSymbols() {
    this.converterService.getLatestExchangeSymbols().subscribe(res => {
      this.symbols = res.symbols;
    });
  }

  convert() {
    this.resultValue = this.latestExchangeRates[this.resultCurrency] * this.baseValue;
  }

  reverseConvert() {
    this.baseValue = this.resultValue / this.latestExchangeRates[this.resultCurrency] ;
  }

  saveConversion() {
    if (this.resultValue > 0 && this.baseValue > 0) {
      this.converterService.recentConversions.push({
        resultValue: this.resultValue,
        baseValue: this.baseValue,
        resultCurrency: this.resultCurrency,
        baseCurrency: this.baseCurrency,
        date: new Date().toString()
      });
    }
  }

}
