import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { OnlyDigitDirective } from 'src/app/directives/only-digit.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [OnlyDigitDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
    MatCardModule,
    DragDropModule
  ],
  exports: [
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
    MatCardModule,
    DragDropModule,
    OnlyDigitDirective
  ]
})
export class SharedModule { }
