import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/features/registration/register.component';
import { RegisterFormComponent } from 'src/app/features/registration/register-form/register-form.component';
import { SimpleFormFieldsModule } from 'src/app/shared/forms/simple-form-fields/simple-form-fields.module';
import { WorkingOverlayModule } from 'src/app/shared/working-overlay/working-overlay.module';
import { OutcomeDisplayModule } from 'src/app/shared/outcome-display/outcome-display.module';
import { UserService } from 'src/app/core/services/user/user/user.service';
import { SendVerificationComponent } from './send-verification/send-verification.component';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    SendVerificationComponent
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
export class RegisterModule { }
