import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ApiPracticeComponent } from './api-practice/api-practice.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendAPIService } from './backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent,
    ApiPracticeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendAPIService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
