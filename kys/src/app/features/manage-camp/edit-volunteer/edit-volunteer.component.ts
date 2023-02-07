import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolunteerMasterService } from 'src/app/core/services/volunteer-master.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss']
})
export class EditVolunteerComponent {


  volunteerMasterForm!: FormGroup
  allStates: any;
  allCamps: any;
  allDistrcicts0: any;
  allDistrcicts1: any;
  cAddressForm!: FormGroup
  pAdressForm!: FormGroup
  selectedVolunteerData: any


  constructor(private fb: FormBuilder, private service: VolunteerMasterService) {
    this.initializeForm();
    this.stateList();
    this.campIdsList();
    this.getVolunteerdata();
  }


  getVolunteerdata() {
    this.service.getVolunteerData()
      .subscribe(res => {
        console.log(res)
        this.selectedVolunteerData = res
        this.volunteerMasterForm.patchValue({
          vId: this.selectedVolunteerData?.data.vId,
          vRNumber: this.selectedVolunteerData?.data.vRNumber,
          uId: this.selectedVolunteerData?.data.uId,
          firstName: this.selectedVolunteerData?.data.firstName,
          middleName: this.selectedVolunteerData?.data.middleName,
          lastName: this.selectedVolunteerData?.data.lastName,
          dob: this.formatDate(new Date(this.selectedVolunteerData?.data.dob)),
          age: this.selectedVolunteerData?.data.age,
          mobile: this.selectedVolunteerData?.data.mobile,
          secondaryMobile: this.selectedVolunteerData?.data.secondaryMobile,
          primaryEmail: this.selectedVolunteerData?.data.primaryEmail,
        })
        /////////////// patch value to address array
        this.cAddressForm.patchValue({
          addressLine1: this.selectedVolunteerData?.data.address[0].addressLine1,
          addressLine2: this.selectedVolunteerData?.data.address[0].addressLine2,
          locality: this.selectedVolunteerData?.data.address[0].locality,
          city: this.selectedVolunteerData?.data.address[0].city,
          state: this.selectedVolunteerData?.data.address[0].state,
          district: this.selectedVolunteerData?.data.address[0].district,
          tehsil: this.selectedVolunteerData?.data.address[0].tehsil,
          pin: this.selectedVolunteerData?.data.address[0].pin,
        })
        this.pAdressForm.patchValue({
          addressLine1: this.selectedVolunteerData?.data.address[1].addressLine1,
          addressLine2: this.selectedVolunteerData?.data.address[1].addressLine2,
          locality: this.selectedVolunteerData?.data.address[1].locality,
          city: this.selectedVolunteerData?.data.address[1].city,
          state: this.selectedVolunteerData?.data.address[1].state,
          district: this.selectedVolunteerData?.data.address[1].district,
          tehsil: this.selectedVolunteerData?.data.address[1].tehsil,
          pin: this.selectedVolunteerData?.data.address[1].pin,
        })

      })
  }
  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
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
        this.service.getDistrictList(res)
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

