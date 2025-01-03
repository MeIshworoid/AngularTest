import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import { HasRoleDirective } from './Directives/has-role.directive';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularTest';
  heading: string='Game of The Year Data'
  isVisible:boolean = false;


// Code from chatgpt... for Changing heading based on current active route....
// Need to understand...
constructor(private router: Router){}

ngOnInit(){
  //change the heading based of navigation.
this.updateHeadingBasedOnRoute();

  this.router.events.pipe(
    filter(event=>event instanceof NavigationEnd)
  ).subscribe(()=>{
    this.updateHeadingBasedOnRoute();
  })
}

updateHeadingBasedOnRoute() {
  const currentRoute = this.router.url; // Get current URL

  console.log('CurrentRouteUrl',currentRoute)

  // Check the current route and update the heading
  if (currentRoute === '/inputgamedata') {
    this.heading = 'Input Game Data'; // For the Input Game page
  } else if (currentRoute === '/gamedata') {
    this.heading = 'Game of The Year Data'; // For Game of The Year Data
  } else if(currentRoute ==='/gamedetails'){
    this.heading='Game Details';
  }
  else {
    this.heading = 'Game of the Year Data'; // Default heading for any other route
  }
}
//
//

  toggleVisibility(){
    this.isVisible=!this.isVisible;
  }

  get buttonLabel(){
    return this.isVisible?'Hide':'Show';
  }

}
