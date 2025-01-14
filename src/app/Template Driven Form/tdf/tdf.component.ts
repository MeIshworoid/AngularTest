import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss',
  standalone:false
})
export class TdfComponent {

  fullName:string='';
  address1:string='';
  phone:number|null=null;
  age:number|null=null;
  district:string='';

  constructor(private toastr:ToastrService){}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', 
        'Full Name: ',this.fullName,
        'Address: ',this.address1,
        'Phone Number: ',this.phone,
        'Age: ',this.age,
        'District:',this.district);
      this.toastr.success("Form Submitted Successfully.","Success",{closeButton:true,timeOut:1000,positionClass:'toast-bottom-right'});
    } else {
      console.log('Form is not valid');
    }
  }

}
