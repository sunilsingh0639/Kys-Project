import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  bookForm!: FormGroup;
  public allBooks: any
  selectedBookId: string = '';


  constructor(private fb: FormBuilder, private bookSerVice: BooksService) {
    this.bookForm = this.fb.group({
      searchKey: ["", [Validators.required,]],
      bookName: ["", [Validators.required]],
      pricing: ["", [Validators.required]],
      category: ["", [Validators.required]],
      image: ["", [Validators.required]],
    })
  }


  getBookList(): void {
    this.bookSerVice.getBookList()
      .subscribe(res => {
        console.log(res)
        this.allBooks = res
      })
  }
  ngOnInit(): void {
    this.getBookList();
  }






  /// edit
  editSelected!: number
  editBook(i: number) {
    this.editSelected = i
    this.bookForm.patchValue({
      bookName: this.allBooks.data[this.editSelected].bookName,
      pricing: this.allBooks.data[this.editSelected].pricing,
      category: this.allBooks.data[this.editSelected].category,
      // image: this.allBooks.data[this.editSelected].image,
    })
  }

  //// new book addding
  reserForm() {
    this.bookForm.reset();
  }
  addNewBook() {
    if (this.editSelected) {
      var formData = new FormData()
      formData.append("bookName", this.bookForm.controls['bookName']?.value)
      formData.append("pricing", this.bookForm.controls['pricing']?.value)
      formData.append("category", this.bookForm.controls['category']?.value)
      formData.append("attachment", this.changedFiles)
      formData.append("_id", this.allBooks.data[this.editSelected]._id)

      this.bookSerVice.editBook(formData)
        .subscribe((res: any) => {
          console.log(res)
          this.getBookList();
        })
    }
    else {
      var formData = new FormData();
      formData.append("bookName", this.bookForm.controls['bookName']?.value)
      formData.append("pricing", this.bookForm.controls['pricing']?.value)
      formData.append("category", this.bookForm.controls['category']?.value)
      formData.append("attachment", this.changedFiles)

      this.bookSerVice.addNewBook(formData)
        .subscribe((res: any) => {
          console.log(res);
          this.getBookList();
        })
    }
    this.bookForm.reset()
  }

  changedFiles !: any
  onFileChange(event: any) {
    this.changedFiles = event.target.files[0]
    console.log(event.target.files[0])
  }


  /// delete
  deleteBook() {
    this.bookSerVice.deleteBookByid(this.selectedBookId)
      .subscribe((res: any) => {
        console.log(res)
        this.getBookList();
      })
  }



  ///// sorting and filtering
  sortBy() { }

  public filterData: any
  filter(searchKey: any) {
    if (searchKey && searchKey !== null) {
      this.bookForm.controls['searchKey'].valueChanges
        .subscribe((value: any) => {
          this.filterData = this.allBooks?.data.filter(function (item: any) {
            return item.bookName.toLowerCase().match(value)
              || item.category.toLowerCase().match(value);
          });
          this.allBooks.data = this.filterData
        })
    }
    else {
      this.getBookList();
    }
  }

}
