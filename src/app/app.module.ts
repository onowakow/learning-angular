import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SortPipe } from './sort.pipe';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SortPipe,
    PermissionDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
