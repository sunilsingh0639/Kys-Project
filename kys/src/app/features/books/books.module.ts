import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports : [
    SharedModule,
  ]
})
export class BooksModule { }
