import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  private readonly conversionRate = 1.6;
  constructor() { }

  convertPrice(price: number, isNpr: boolean): number {
    return isNpr
      ? parseFloat((price / this.conversionRate).toFixed(2))
      : parseFloat((price * this.conversionRate).toFixed(2));
  }
}
