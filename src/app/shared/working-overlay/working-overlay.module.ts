import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingOverlayComponent } from './working-overlay.component';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [
    WorkingOverlayComponent
  ],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [
    WorkingOverlayComponent
  ]
})
export class WorkingOverlayModule { }
