import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { SimpleFormFieldsModule } from '../../shared/forms/simple-form-fields/simple-form-fields.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './session.service';
import { WorkingOverlayFormModule } from 'src/app/shared/working-overlay/working-overlay.module';
import { OutcomeDisplayModule } from 'src/app/shared/outcome-display/outcome-display.module';



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
    SimpleFormFieldsModule,
    WorkingOverlayFormModule,
    OutcomeDisplayModule
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
