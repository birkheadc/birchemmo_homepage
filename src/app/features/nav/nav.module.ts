import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from 'src/app/features/nav/nav.component';
import { NavLinkComponent } from 'src/app/features/nav/nav-link/nav-link.component';
import { SessionModule } from 'src/app/features/session/session.module';



@NgModule({
  declarations: [
    NavComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SessionModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {

}
