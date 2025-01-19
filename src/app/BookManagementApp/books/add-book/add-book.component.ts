import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ConversionService } from '../../services/conversion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
  standalone: false
})
export class AddBookComponent {

  addbookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private conversionService: ConversionService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.addbookForm = this.formBuilder.group({
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
      //publication: ['', Validators.pattern('^[a-zA-Z0-9 ]*$')],
      publication: ['']
    });

    this.onPriceChanges();

  }

  get authors(): FormArray {
    return this.addbookForm.get('authors') as FormArray;
  }

  addAuthor(): void {
    this.authors.push(this.formBuilder.control('', Validators.required));
  }

  isAuthorInvalid(): boolean {
    return this.authors.length === 0 || this.authors.controls.every(control => !control.value.trim());
  }

  removeAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  onPriceChanges(): void {
    this.addbookForm.get('priceForNepal')?.valueChanges.subscribe((value) => {
      if (value) {
        const converted = this.conversionService.convertPrice(value, true);
        this.addbookForm.patchValue({ priceForIndia: converted }, { emitEvent: false });
      }
    });
    this.addbookForm.get('priceForIndia')?.valueChanges.subscribe((value) => {
      if (value) {
        const converted = this.conversionService.convertPrice(value, false);
        this.addbookForm.patchValue({ priceForNepal: converted }, { emitEvent: false });
      }
    });
  }

  submit(): void {
    if (this.addbookForm.valid) {
      const newBook = { ...this.addbookForm.value, id: Date.now() };
      this.bookService.addBook(newBook);
      this.toastr.success("Book added successfully.", "Success", { closeButton: true, timeOut: 1500, positionClass: 'toast-top-right' });
      this.router.navigate(['/bookList']);
    }
    else{
      this.toastr.error("Error occur while adding book.", "Error", { closeButton: true, timeOut: 2000, positionClass: 'toast-bottom-right' });
    }
  }

}
