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

  getBooks():void

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  getBookByID(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

}
