import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  standalone: false
})
export class BookDetailComponent implements OnInit {

  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.book = this.bookService.getBookByID(id);
  }

}
