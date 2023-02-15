import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './features/download/download.component';
import { RegisterComponent } from './features/registration/register.component';
import { LoginComponent } from './features/session/login/login.component';
import { TosComponent } from './features/tos/tos.component';
import { VerifyComponent } from './features/verify/verify.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tos', component: TosComponent },
  { path: 'verify/:code', component: VerifyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
