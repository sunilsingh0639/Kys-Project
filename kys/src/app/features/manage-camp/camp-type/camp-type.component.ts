import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampTypeListService } from 'src/app/core/services/camp-type-list.service';


export interface CampTypeTable {
  description: string;
  createDate: string;
  updateDate: number;
}

@Component({
  selector: 'app-camp-type',
  templateUrl: './camp-type.component.html',
  styleUrls: ['./camp-type.component.scss']
})
export class CampTypeComponent {

  displayedColumns: string[] = ['#', 'description', 'createDate', 'updateDate' , 'action']


  campTypeForm!: FormGroup;
  allCampTypes: any
  selectedCampTypeId: string = '';

  constructor(private fb: FormBuilder, private campTypeService: CampTypeListService) {
    this.campTypeForm = this.fb.group({
      description: ["", [Validators.required]],
    })
  }


  getCampType(): void {
    this.campTypeService.getCampTypeList()
      .subscribe(res => {
        console.log(res)
        this.allCampTypes = res
      })
  }
  ngOnInit(): void {
    this.getCampType();
  }




  /// edit
  editSelected!: number
  editCampType(i: number) {
    this.editSelected = i
    this.campTypeForm.patchValue({
      description : this.allCampTypes.data[this.editSelected].description
    })
  }

  //// new book addding
  reserForm() {
    this.campTypeForm.reset();
  }
  addNewCampType() {
    if (this.editSelected) {
      let camp = {
        description: this.campTypeForm.value.description,
        _id: this.allCampTypes?.data[this.editSelected]._id
      }

      this.campTypeService.editCampType(camp)
        .subscribe((res: any) => {
          console.log(res)
          this.getCampType();
        })
    }
    else {
      let camp = {
        description: this.campTypeForm.value.description,
      }
      this.campTypeService.addNewCampType(camp)
        .subscribe((res: any) => {
          console.log(res);
          this.getCampType();
        })
    }
    this.campTypeForm.reset()
  }


  /// delete
  deleteType() {
    this.campTypeService.deleteCampType(this.selectedCampTypeId)
      .subscribe((res: any) => {
        console.log(res)
        this.getCampType();
      })
  }


  //////////// sorting
  sortBy(){}

}
