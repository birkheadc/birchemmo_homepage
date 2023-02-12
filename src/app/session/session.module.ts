import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { SimpleFormFieldsModule } from '../simple-form-fields/simple-form-fields.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './session.service';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SimpleFormFieldsModule
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
