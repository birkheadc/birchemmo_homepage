import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from 'src/app/features/download/download.component';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DownloadComponent
  ]
})
export class DownloadModule { }
