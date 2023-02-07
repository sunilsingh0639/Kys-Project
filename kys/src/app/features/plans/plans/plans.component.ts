import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/core/services/books.service';
import { PlansService } from 'src/app/core/services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  planForm!: FormGroup ;
  allBooks: any
  allPlans: any
  selectedPlanId: string = ''

  constructor(private planSer: PlansService, private _fb: FormBuilder, private bookSer: BooksService) {
    this.planForm = this._fb.group({
      searchKey : ["",[Validators.required]],
      name: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      price: ["", [Validators.required]],
      books: ["", [Validators.required]],
      description: ["", [Validators.required]],
    })
    this.planForm.controls['books'].valueChanges.subscribe((res) => {
      if (res) {
        const book = this.allBooks?.data.find(function (item: any) { return item.bookName == res });
        const total = this.planForm.value.duration * book.pricing
        this.planForm.patchValue({ price: total });
      }
    })
  }


  ///////// get book list
  getBookLists() {
    this.bookSer.getBookList()
      .subscribe((res: any) => {
        console.log(res)
        this.allBooks = res
      })
  }
  ///////// get plan list
  getPlanLists() {
    this.planSer.getPlanList()
      .subscribe((res: any) => {
        console.log(res)
        this.allPlans = res
      })
  }
  ngOnInit(): void {
    this.getBookLists();
    this.getPlanLists();
  }

  ////////////// reset form
  resetForm() {
    this.planForm.reset()
  }


  ////////// edit plan
  editSelected!: number
  editPlan(i: number) {
    this.editSelected = i
    this.planForm.patchValue({
      name: this.allPlans?.data[this.editSelected].name,
      duration: this.allPlans?.data[this.editSelected].duration,
      price: this.allPlans?.data[this.editSelected].price,
      books: this.allPlans?.data[this.editSelected].books[0],
      description: this.allPlans?.data[this.editSelected].description,
    })
  }


  ///////// add plan

  addNewPlan() {
    if (this.editSelected) {
      let plan = {
        name: this.planForm.value.name,
        books: this.planForm.value.books,
        duration: this.planForm.value.duration,
        price: this.planForm.value.price,
        description: this.planForm.value.description,
        bookId: this.allPlans?.data[this.editSelected].bookId,
        createDate: this.allPlans?.data[this.editSelected].createDate,
        planId: this.allPlans?.data[this.editSelected].planId,
        updateDate: this.allPlans?.data[this.editSelected].updateDate,
        __v: this.allPlans?.data[this.editSelected].__v,
        _id: this.allPlans?.data[this.editSelected]._id
      }

      this.planSer.editPlan(plan)
        .subscribe((res: any) => {
          console.log(res);
          this.getPlanLists();
        })
    }
    else {
      this.planSer.addNewPlan(this.planForm.value)
        .subscribe((res: any) => {
          console.log(res);
          this.getPlanLists();
        })
    }
  }



  ///////// delete plan
  deletePlan() {
    this.planSer.deletePlanById(this.selectedPlanId)
      .subscribe((res: any) => {
        console.log(res)
        this.getPlanLists();
      })
  }





/////////// sorting and filtering
sortBy() { }

public filterData: any
filter(searchKey: any) {
  if (searchKey && searchKey !== null) {
    this.planForm.controls['searchKey'].valueChanges
      .subscribe((value: any) => {
        this.filterData = this.allPlans?.data.filter(function (item: any) {
          return item.name.toLowerCase().match(value)
            // || item.books[0].toLowerCase().match(value);
        });
        this.allPlans.data = this.filterData
      })
  }
  else {
    this.getPlanLists();
  }
}

}

