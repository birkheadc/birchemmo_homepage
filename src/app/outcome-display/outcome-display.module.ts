import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutcomeDisplayComponent } from './outcome-display/outcome-display.component';



@NgModule({
  declarations: [
    OutcomeDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OutcomeDisplayComponent
  ]
})
export class OutcomeDisplayModule { }
