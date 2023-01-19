import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'download', component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
