import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TdfComponent } from '../tdf/tdf.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TdfComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:TdfComponent} //for lazy loading component this is required
    ])
  ],

  exports:[TdfComponent]
})
export class TDFModule { }
