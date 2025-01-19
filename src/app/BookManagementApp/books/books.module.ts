import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterOutlet } from '@angular/router';
import { UpdateBookComponent } from './update-book/update-book.component';


@NgModule({
  declarations: [
    AddBookComponent,
    BookDetailComponent,
    BookListComponent,
    UpdateBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }
