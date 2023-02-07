import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
  ],
  exports: [
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
  ]
})
export class SharedModule { }
