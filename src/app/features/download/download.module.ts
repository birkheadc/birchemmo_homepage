import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from 'src/app/features/download/download.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DownloadComponent
  ]
})
export class DownloadModule { }
