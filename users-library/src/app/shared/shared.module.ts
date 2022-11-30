import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserDetailsComponent]
})
export class SharedModule { }
