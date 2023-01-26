import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenewRoutingModule } from './features/renew/renew-routing.module';
import { LayoutsComponent } from './shared/layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RenewRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
