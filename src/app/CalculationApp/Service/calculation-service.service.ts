import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationServiceService {

  constructor() { }

  addition(num1:number,num2:number):number{
    return num1+num2;
  }

  subtraction(num1:number,num2:number):number{
    return num1-num2;
  }

  multiplication(num1:number,num2:number):number{
    return num1*num2;
  }

  division(num1:number,num2:number):number|string{
    if(num2==0){
      return 'Cannot divide by zero';
    }

    return num1/num2;
  }
}
