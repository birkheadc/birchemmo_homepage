import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadModule } from './features/download/download.module';
import { NavModule } from './features/nav/nav.module';
import { RegisterModule } from './features/registration/register.module';
import { SessionModule } from './core/services/session/session.module';
import { TosModule } from './features/tos/tos.module';
import { WelcomeModule } from './features/welcome/welcome.module';

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
