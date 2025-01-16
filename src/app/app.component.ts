import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import { HasRoleDirective } from './Directives/has-role.directive';
import { filter } from 'rxjs';
import { TDFModule } from './Template Driven Form/module/tdf.module';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularTest';
  heading: string='Game of The Year Data'
  isVisible:boolean = false;

  role:string|null=null;

// Code from chatgpt... for Changing heading based on current active route....
// Need to understand...
constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object){}

ngOnInit(){
  //change the heading based of navigation.
this.updateHeadingBasedOnRoute();

  this.router.events.pipe(
    filter(event=>event instanceof NavigationEnd)
  ).subscribe(()=>{
    this.updateHeadingBasedOnRoute();
  })
}

isAdmin():boolean{

  if(isPlatformBrowser(this.platformId)){
    this.role =localStorage.getItem('role');
    return this.role ==='admin';
  }

  return false;
}

logout():void{
  localStorage.removeItem('role');
  this.role=null;
  this.router.navigate(['/loginForm']); 
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
  else if(currentRoute ==='/loginForm'){
    this.heading='Login Form';
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
