import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { subscriberComponent } from './subscriber/subscriber.component';




@NgModule({
  declarations: [
    subscriberComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    SharedModule,
    ReactiveFormsModule,
  ],

})
export class SubscriberModule { }
