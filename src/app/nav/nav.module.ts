import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './nav-link/nav-link.component';



@NgModule({
  declarations: [
    NavComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
