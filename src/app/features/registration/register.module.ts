import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormFieldsModule } from '../../shared/forms/simple-form-fields/simple-form-fields.module';
import { WorkingOverlayFormModule } from '../../shared/working-overlay/working-overlay.module';
import { OutcomeDisplayModule } from '../../shared/outcome-display/outcome-display.module';
import { UserService } from '../../core/services/user/user.service';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
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
    UserService
  ]
})
export class RegisterModule { }
