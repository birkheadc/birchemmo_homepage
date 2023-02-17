import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AccountModule { }
