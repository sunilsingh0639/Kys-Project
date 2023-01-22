import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { MngaddressComponent } from './mngaddress/mngaddress.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';







@NgModule({
  declarations: [
    MngaddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AddressModule { }
