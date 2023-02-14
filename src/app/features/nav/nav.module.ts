import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from 'src/app/features/nav/nav.component';
import { NavLinkComponent } from 'src/app/features/nav/nav-link/nav-link.component';



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
export class NavModule {

}
