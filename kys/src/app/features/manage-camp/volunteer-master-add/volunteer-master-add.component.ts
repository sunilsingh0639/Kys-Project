import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
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
  cAddressForm!: FormGroup
  pAdressForm!: FormGroup



  constructor(private fb: FormBuilder, private volunteerService: VolunteerMasterService ,
    private route : Router) {
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
    this.cAddressForm = this.fb.group({
      addressLine1: ["", [Validators.required]],
      addressLine2: [""],
      locality: [""],
      city: [""],
      state: [""],
      district: [""],
      tehsil: [""],
      pin: [""],
    })
    this.address.push(this.cAddressForm);
    let state = this.cAddressForm.controls['state']
    state.valueChanges
      .subscribe(res => {
        this.volunteerService.getDistrictList(res)
          .subscribe((res: any) => {
            this.allDistrcicts0 = res
          })
      })
  }
  addPAddress() {
    this.pAdressForm = this.fb.group({
      addressLine1: ["", [Validators.required]],
      addressLine2: [""],
      locality: [""],
      city: [""],
      state: [""],
      district: [""],
      tehsil: [""],
      pin: [""],
    })
    this.address.push(this.pAdressForm);
    let state = this.pAdressForm.controls['state']
    state.valueChanges
      .subscribe(res => {
        this.volunteerService.getDistrictList(res)
          .subscribe((res: any) => {
            this.allDistrcicts1 = res
          })
      })
  }


  stateList() {
    this.volunteerService.getStatesList()
      .subscribe((res: any) => {
        this.allStates = res
      })
  }

  campIdsList() {
    this.volunteerService.getCampIdList()
      .subscribe((res: any) => {
        this.allCamps = res
      })
  }

  addVolunteerMaster() {
    const data = {
      address: [
        {
          addressLine1: this.cAddressForm.value.addressLine1,
          addressLine2: this.cAddressForm.value.addressLine2,
          city: this.cAddressForm.value.city,
          country: "",
          district: this.cAddressForm.value.district,
          locality: this.cAddressForm.value.locality,
          pin: this.cAddressForm.value.pin,
          state: this.cAddressForm.value.state,
          tehsil: this.cAddressForm.value.tehsil,
        },
        {
          addressLine1: this.pAdressForm.value.addressLine1,
          addressLine2: this.pAdressForm.value.addressLine2,
          city: this.pAdressForm.value.city,
          country: "",
          district: this.pAdressForm.value.district,
          locality: this.pAdressForm.value.locality,
          pin: this.pAdressForm.value.pin,
          state: this.pAdressForm.value.state,
          tehsil: this.pAdressForm.value.tehsil,
        }
      ],
      age: this.volunteerMasterForm.value.age,
      batchId: null,
      campId: null,
      dob: new Date(this.volunteerMasterForm.value.dob).getTime(),
      firstName: this.volunteerMasterForm.value.firstName,
      isVolunteer: true,
      lastName: this.volunteerMasterForm.value.middleName,
      middleName: this.volunteerMasterForm.value.lastName,
      mobile: this.volunteerMasterForm.value.mobile,
      newCount: null,
      oldCount: null,
      primaryEmail: this.volunteerMasterForm.value.primaryEmail,
      secondaryEmail: "",
      secondaryMobile: this.volunteerMasterForm.value.secondaryMobile,
      totalCount: null,
      uId: this.volunteerMasterForm.value.uId,
      vCount: null,
      vId: Number(this.volunteerMasterForm.value.vId),
      vRNumber: this.volunteerMasterForm.value.vRNumber,
    }
    this.volunteerService.addVolunteerMaster(data)
      .subscribe((res: any) => {
        console.log(res)
      })

    this.route.navigate(['/app/manage-camp/voluteer-master'])
  }


}


