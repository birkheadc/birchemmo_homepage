import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/features/session/login/login.component';
import { LogoutComponent } from 'src/app/features/session/logout/logout.component';
import { LoginFormComponent } from 'src/app/features/session/login/login-form/login-form.component';
import { SimpleFormFieldsModule } from 'src/app/shared/forms/simple-form-fields/simple-form-fields.module';
import { SessionService } from 'src/app/core/services/session/session.service';
import { OutcomeDisplayModule } from 'src/app/shared/outcome-display/outcome-display.module';
import { WorkingOverlayFormModule } from 'src/app/shared/working-overlay/working-overlay.module';



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
