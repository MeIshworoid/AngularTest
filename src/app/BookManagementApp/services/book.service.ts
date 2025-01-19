import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];
  //private booksSubject = new BehaviorSubject<Book[]>(this.books); // BehaviourSubject hold inital value(books array)
  // and allow subscriber to recieve most recent value, even if no new value has been emitted.
  //books$ = this.booksSubject.asObservable(); // this books$ is as an observable for external 
  // components or services to subscribe to. 
  // here asobservable ensures that no external code manipulate this (encapsulation)

  constructor(){}

  getBooks():Book[]{
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookByID(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  updateBookByID(id: number, updatedBook: Partial<Book>): void {
    this.books.forEach(book => {
      if (book.id === id) Object.assign(book, updatedBook);
    });
  }

  deleteBookByID(id: number): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

}
