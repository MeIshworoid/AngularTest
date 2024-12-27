import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CalculationServiceService } from '../Service/calculation-service.service';

@Component({
  selector: 'app-calculator',
  imports: [InputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  standalone:true // standalone componenet implicitly handle the DI
                  // No need to use of providers:[CalculationService] property
})
export class CalculatorComponent {
  receivedNumber:Numbers={num1:0,num2:0};
  result:Results={addition:0,subtraction:0,multiplication:0,division:0};

  constructor(private calculationService:CalculationServiceService){} //Injecting the service

  onNumberChanged(event:{num1:number,num2:number}):void{
    this.receivedNumber = event;
    console.log("receivenumber is ",this.receivedNumber);

    this.result={
      addition:this.calculationService.addition(this.receivedNumber.num1,this.receivedNumber.num2),
      subtraction:this.calculationService.subtraction(this.receivedNumber.num1,this.receivedNumber.num2),
      multiplication:this.calculationService.multiplication(this.receivedNumber.num1,this.receivedNumber.num2),
      division:this.calculationService.division(this.receivedNumber.num1,this.receivedNumber.num2)
    };
  }

  
}

interface Numbers{
  num1:number;
  num2:number;
}

interface Results{
  addition:number;
  subtraction:number;
  multiplication:number;
  division:number|string;
}