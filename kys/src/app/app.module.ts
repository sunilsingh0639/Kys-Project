import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './shared/layouts/layouts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
