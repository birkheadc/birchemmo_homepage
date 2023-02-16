import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/features/session/login/login.component';
import { LoginFormComponent } from 'src/app/features/session/login/login-form/login-form.component';
import { SimpleFormFieldsModule } from 'src/app/shared/forms/simple-form-fields/simple-form-fields.module';
import { OutcomeDisplayModule } from 'src/app/shared/outcome-display/outcome-display.module';
import { WorkingOverlayFormModule } from 'src/app/shared/working-overlay/working-overlay.module';
import { SessionTokenService } from 'src/app/core/services/session/sessionTokenService/session-token.service';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';
import { LogoutComponent } from './logout/logout.component';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';



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
    WorkingOverlayFormModule,
    OutcomeDisplayModule
  ],
  providers: [
    SessionTokenService,
    SessionManagerService
  ]
})
export class SessionModule { }
