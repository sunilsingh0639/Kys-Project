import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans/plans.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class PlansModule { }
