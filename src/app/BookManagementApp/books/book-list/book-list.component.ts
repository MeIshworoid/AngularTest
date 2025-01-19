import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  standalone: false
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  viewDetails(id:number):void{
    this.router.navigate(['/bookDetail',id]);
  }

  updateBook(id:number):void{
    this.router.navigate(['/updateBook',id]);
  }
  
  deleteBook(id:number):void{
    this.bookService.deleteBookByID(id);
    this.toastr.success('Book deleted successfully.', 'Success', {
      closeButton:
        true, timeOut: 1500
    });
    this.router.navigate(['/bookList'])
  }
}
