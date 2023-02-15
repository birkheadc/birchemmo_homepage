import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadModule } from './features/download/download.module';
import { NavModule } from './features/nav/nav.module';
import { RegisterModule } from './features/registration/register.module';
import { SessionModule } from './features/session/session.module';
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
    TosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
