import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolunteerMasterService } from 'src/app/core/services/volunteer-master.service';

@Component({
  selector: 'app-volunteer-master-add',
  templateUrl: './volunteer-master-add.component.html',
  styleUrls: ['./volunteer-master-add.component.scss']
})
export class VolunteerMasterAddComponent {


  volunteerMasterForm!: FormGroup
  allStates: any;
  allCamps: any;
  allDistrcicts0: any;
  allDistrcicts1: any;
  addressForm!: FormGroup



  constructor(private fb: FormBuilder, private service: VolunteerMasterService) {
    this.initializeForm();
    this.stateList();
    this.campIdsList();
  }



  initializeForm() {
    this.volunteerMasterForm = this.fb.group({
      vId: ["", [Validators.required]],
      vRNumber: ["", [Validators.required]],
      uId: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      middleName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      age: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      secondaryMobile: ["", [Validators.required]],
      primaryEmail: ["", [Validators.required]],
      address: this.fb.array([])
    })
    this.addCAddress();
    this.addPAddress();
  }

  get address() {
    return this.volunteerMasterForm.controls['address'] as FormArray;
  }

  addCAddress() {
    const addressForm = this.fb.group({
      addressLine1: ["", [Validators.required]],
      addressLine2: [""],
      locality: [""],
      city: [""],
      state: [""],
      district: [""],
      tehsil: [""],
      pin: [""],
    })
    this.address.push(addressForm);
    let state = addressForm.controls['state']
    state.valueChanges
    .subscribe(res =>{
      this.service.getDistrictList(res)
      .subscribe((res: any) => {
        this.allDistrcicts0 = res
      })
    })
  }
  addPAddress() {
    const addressForm = this.fb.group({
      addressLine1: ["", [Validators.required]],
      addressLine2: [""],
      locality: [""],
      city: [""],
      state: [""],
      district: [""],
      tehsil: [""],
      pin: [""],
    })
    this.address.push(addressForm);
    let state = addressForm.controls['state']
    state.valueChanges
    .subscribe(res =>{
      this.service.getDistrictList(res)
      .subscribe((res: any) => {
        this.allDistrcicts1 = res
      })
    })
  }


  stateList() {
    this.service.getStatesList()
      .subscribe((res: any) => {
        this.allStates = res
      })
  }

  campIdsList() {
    this.service.getCampIdList()
      .subscribe((res: any) => {
        this.allCamps = res
      })
  }



}


