import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/features/session/login/login.component';
import { LoginFormComponent } from 'src/app/features/session/login/login-form/login-form.component';
import { SimpleFormFieldsModule } from 'src/app/shared/forms/simple-form-fields/simple-form-fields.module';
import { OutcomeDisplayModule } from 'src/app/shared/outcome-display/outcome-display.module';
import { WorkingOverlayModule } from 'src/app/shared/working-overlay/working-overlay.module';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SimpleFormFieldsModule,
    WorkingOverlayModule,
    OutcomeDisplayModule
  ]
})
export class SessionModule { }
