import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserService } from '../user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormFieldsModule } from '../simple-form-fields/simple-form-fields.module';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SimpleFormFieldsModule
  ],
  providers: [
    UserService
  ]
})
export class RegisterModule { }
