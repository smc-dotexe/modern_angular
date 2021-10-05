import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { PagesComponent } from './pages/pages.component';
import { PaginationDirective } from './pages/pagination.directive';
import { IsActiveClassDirective } from './pages/is-active-class.directive';
import { AdjustDirective } from './pages/adjust.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TimesDirective,
    PagesComponent,
    PaginationDirective,
    IsActiveClassDirective,
    AdjustDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
