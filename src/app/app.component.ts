import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HasRoleDirective } from './Directives/has-role.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HasRoleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularTest';

  isVisible:boolean = false;

  toggleVisibility(){
    this.isVisible=!this.isVisible;
  }

  get buttonLabel(){
    return this.isVisible?'Hide':'Show';
  }

}
