import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadModule } from './download/download.module';
import { NavModule } from './nav/nav.module';
import { RegisterModule } from './register/register.module';
import { SessionModule } from './session/session.module';
import { TosModule } from './tos/tos.module';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    SessionModule,
    RegisterModule,
    DownloadModule,
    WelcomeModule,
    TosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
