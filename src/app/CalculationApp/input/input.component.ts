import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
num1:number=0;
num2:number=0;

//@Input decorator is used to send the data from parent to child component
//@Output decorator is used to send/emit the data from child to parent component

@Output() numberChanged: EventEmitter<{ num1: number, num2: number }> = new EventEmitter<{ num1: number, num2: number }>();

onInputChanged():void{
  this.numberChanged.emit({
    num1:this.num1,
    num2:this.num2
  })
}

}
