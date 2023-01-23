import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserService } from '../user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormInputComponent } from './register-form/register-form-input/register-form-input.component';
import { RegisterFormCheckboxComponent } from './register-form/register-form-checkbox/register-form-checkbox.component';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    RegisterFormInputComponent,
    RegisterFormCheckboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class RegisterModule { }
