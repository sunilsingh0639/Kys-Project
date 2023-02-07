import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantsTypeListService } from 'src/app/core/services/participants-type-list.service';

@Component({
  selector: 'app-participants-type',
  templateUrl: './participants-type.component.html',
  styleUrls: ['./participants-type.component.scss']
})
export class ParticipantsTypeComponent {

  
  participantsTypeForm!: FormGroup;
  allParticipantsType: any
  selectedParticipantsTypeId: string = '';

  constructor(private fb: FormBuilder, private partiTypeService: ParticipantsTypeListService) {
    this.participantsTypeForm = this.fb.group({
      description: ["", [Validators.required]],
    })
  }


  getParticipantsType(): void {
    this.partiTypeService.getParticipantsTypeList()
      .subscribe(res => {
        console.log(res)
        this.allParticipantsType = res
      })
  }
  ngOnInit(): void {
    this.getParticipantsType();
  }




  /// edit
  editSelected!: number
  editParticipantsType(i: number) {
    this.editSelected = i
    this.participantsTypeForm.patchValue({
      description : this.allParticipantsType.data[this.editSelected].description
    })
  }

  //// new book addding
  resetForm() {
    this.participantsTypeForm.reset();
  }
  addNewParticipantsType() {
    if (this.editSelected) {
      let participants = {
        description: this.participantsTypeForm.value.description,
        _id: this.allParticipantsType?.data[this.editSelected]._id
      }

      this.partiTypeService.editParticipantsType(participants)
        .subscribe((res: any) => {
          console.log(res)
          this.getParticipantsType();
        })
    }
    else {
      let participants = {
        description: this.participantsTypeForm.value.description,
      }
      this.partiTypeService.addNewParticipantsType(participants)
        .subscribe((res: any) => {
          console.log(res);
          this.getParticipantsType();
        })
    }
    this.participantsTypeForm.reset()
  }


  /// delete
  deleteParticipantsType() {
    this.partiTypeService.deleteParticipantsType(this.selectedParticipantsTypeId)
      .subscribe((res: any) => {
        console.log(res)
        this.getParticipantsType();
      })
  }



  sortBy(){}


  

}
