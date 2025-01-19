import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConversionService } from '../../services/conversion.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.scss',
  standalone: false
})
export class UpdateBookComponent implements OnInit {
  updateBookForm: FormGroup;
  id: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private conversionService:ConversionService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.updateBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      authors: this.formBuilder.array([], Validators.required),
      priceForNepal: [
        null,
        [Validators.min(0), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]
      ],
      priceForIndia: [
        null,
        [Validators.min(0), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]
      ],
      //publication: ['', Validators.pattern('^[a-zA-Z0-9 ]*$')]
      publication: ['']
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const book = this.bookService.getBookByID(this.id);

    if (book) {
      this.updateBookForm.patchValue({
        id:book.id,
        name: book.name,
        priceForNepal: book.priceForNepal,
        priceForIndia: book.priceForIndia,
        publication: book.publication
      });

      book.authors.forEach(author => {
        this.authors.push(this.formBuilder.control(author, Validators.required));
      });

      this.onPriceChanges();
    } else {
      this.toastr.error('Book not found', 'Error');
      this.router.navigate(['/bookList']);
    }

  }

  get authors(): FormArray {
    return this.updateBookForm.get('authors') as FormArray;
  }

  addAuthor(): void {
    this.authors.push(this.formBuilder.control('', Validators.required));
  }

  removeAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  isAuthorInvalid(): boolean {
    return this.authors.length === 0 || this.authors.controls.every(control => !control.value.trim());
  }

  onPriceChanges(): void {
    this.updateBookForm.get('priceForNepal')?.valueChanges.subscribe((value) => {
      if (value) {
        const converted = this.conversionService.convertPrice(value, true);
        this.updateBookForm.patchValue({ priceForIndia: converted }, { emitEvent: false });
      }
    });
    this.updateBookForm.get('priceForIndia')?.valueChanges.subscribe((value) => {
      if (value) {
        const converted = this.conversionService.convertPrice(value, false);
        this.updateBookForm.patchValue({ priceForNepal: converted }, { emitEvent: false });
      }
    });
  }

  submit(): void {

    console.log("id:",this.id);
    console.log("book",this.updateBookForm);
    if (this.updateBookForm.valid && this.id !== undefined) {
      this.bookService.updateBookByID(this.id, this.updateBookForm.value);
      this.toastr.success('Book updated successfully.', 'Success', {
        closeButton:
          true, timeOut: 1500
      });
      this.router.navigate(['/bookList']);
    } else {
      this.toastr.error('Error while updating book.', 'Error', {
        closeButton: true,
        timeOut: 2000
      });
    }
  }

}
