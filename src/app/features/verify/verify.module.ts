import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify.component';
import { WorkingOverlayModule } from 'src/app/shared/working-overlay/working-overlay.module';



@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    CommonModule,
    WorkingOverlayModule
  ],
  exports: [
    VerifyComponent
  ]
})
export class VerifyModule {
  
}
