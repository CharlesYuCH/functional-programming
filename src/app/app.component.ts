import { Component } from '@angular/core';
import { curry } from './utils/curry';
import { compose } from './utils/compose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price = 500;
  cost: number;
  profit: number;
  profitRate: string;

  setDenominator = curry((denominator: number, molecular: number) => molecular / denominator);

  setMinuend = curry((minuend: number, reduction: number) => minuend - reduction);

  getProfit = this.setMinuend(this.price);

  getRate = this.setDenominator(this.price);

  // getProfitRate :: Int -> Float -> String
  getProfitRate = compose(this.formatRate, this.getRate, this.getProfit);

  formatRate(rate: number) {
    return rate * 100 + '%';
  }

  changeCost(cost: number) {
    this.profit = this.getProfit(cost);
    this.profitRate = this.getProfitRate(cost);
  }

}
