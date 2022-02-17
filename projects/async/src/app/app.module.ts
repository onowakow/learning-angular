import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { HeroesModule } from './heroes/heroes.module';

import { BackendAPIService } from './backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent,
  ],
  imports: [
    HeroesModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendAPIService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
