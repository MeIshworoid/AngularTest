import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

username:string ='';
password:string ='';

constructor(private router:Router){}

login(form:NgForm):void{
  console.log('username:',this.username);

  if(form.valid){

  //set the role => admin as a key value pair in local storage
  //local storage is browser feature that store data in a key value pair 
  // and persist even after the page reloads or the browser is closed and reopened.
    if(this.username==='admin' &&this.password==='1'){
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/inputgamedata']);
    }
    else if(this.username==='user'&&this.password==='2'){
      localStorage.setItem('role','user');
      this.router.navigate(['/gamedata']);
    }
    else{
      alert('Invalid Login.');
  }
}
}

}
