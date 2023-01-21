import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layouts/layout/layout.component';
import { LayoutsComponent } from './shared/layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
