import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenewRoutingModule } from './features/renew/renew-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RenewRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
