import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/features/account/account.component';
import { PlayComponent } from 'src/app/features/play/play.component';
import { SendVerificationComponent } from 'src/app/features/registration/send-verification/send-verification.component';
import { LogoutComponent } from 'src/app/features/session/logout/logout.component';
import { DownloadComponent } from './features/download/download.component';
import { RegisterComponent } from './features/registration/register.component';
import { LoginComponent } from './features/session/login/login.component';
import { TosComponent } from './features/tos/tos.component';
import { VerifyComponent } from './features/verify/verify.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'send-verification/:emailAddress', component: SendVerificationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
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
