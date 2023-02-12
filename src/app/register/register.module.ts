import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormFieldsModule } from '../simple-form-fields/simple-form-fields.module';
import { WorkingOverlayFormModule } from '../working-overlay-form/working-overlay-form.module';
import { OutcomeDisplayModule } from '../outcome-display/outcome-display.module';
import { UserService } from '../user/user.service';



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
