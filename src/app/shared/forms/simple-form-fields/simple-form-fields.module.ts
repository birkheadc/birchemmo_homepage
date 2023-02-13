import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTextFieldComponent } from './simple-text-field/simple-text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleCheckboxFieldComponent } from './simple-checkbox-field/simple-checkbox-field.component';



@NgModule({
  declarations: [
    SimpleTextFieldComponent,
    SimpleCheckboxFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SimpleTextFieldComponent,
    SimpleCheckboxFieldComponent
  ]
})
export class SimpleFormFieldsModule { }
