import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingOverlayFormComponent } from './working-overlay-form/working-overlay-form.component';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [
    WorkingOverlayFormComponent
  ],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [
    WorkingOverlayFormComponent
  ]
})
export class WorkingOverlayFormModule { }
