import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ConversionService } from '../../services/conversion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private conversionService: ConversionService,
    private toastr: ToastrService
  ) {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      authors: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
      priceForNepal: [
        null,
        [Validators.min(0), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
      priceForIndia: [
        null,
        [Validators.min(0), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')],
      ],
      publication: ['', Validators.pattern('^[a-zA-Z0-9 ]*$')],
    });

    this.onPriceChanges();

  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
    }
    addAuthor(): void {
    this.authors.push(this.fb.control('', Validators.required));
    }
    removeAuthor(index: number): void {
    this.authors.removeAt(index);
    }
    onPriceChanges(): void {
    this.bookForm.get('priceForNepal')?.valueChanges.subscribe((value) => {
    if (value) {
    const converted = this.bookService.convertPrice(value, true);
    this.bookForm.patchValue({ priceForIndia: converted }, { emitEvent: false });
    }
    });
    this.bookForm.get('priceForIndia')?.valueChanges.subscribe((value) => {
    if (value) {
    const converted = this.bookService.convertPrice(value, false);
    this.bookForm.patchValue({ priceForNepal: converted }, { emitEvent: false });
    }
    });
    }
    submit(): void {
    if (this.bookForm.valid) {
    const newBook = { ...this.bookForm.value, id: Date.now() };
    this.bookService.addBook(newBook);
    this.router.navigate(['/']);
    }
    }

}
