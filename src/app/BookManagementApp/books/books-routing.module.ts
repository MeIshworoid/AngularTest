import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: 'bookList', component: BookListComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'bookDetail/:id', component: BookDetailComponent },
  { path: 'updateBook/:id', component: UpdateBookComponent },
  { path: '', redirectTo: '/bookList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
