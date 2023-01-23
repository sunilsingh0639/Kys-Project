import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
  ], 
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
