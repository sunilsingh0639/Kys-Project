import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VolunteerMasterService } from 'src/app/core/services/volunteer-master.service';
import { ValidateEmail } from 'src/app/directives/emailValidator';
import { ValidateMobile } from 'src/app/directives/mobileValidator';

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
  cAddressForm!: FormGroup ;
  pAddressForm!: FormGroup ;



  constructor(private fb: FormBuilder, private volunteerService: VolunteerMasterService,
    private route: Router) {
    this.initializeForm();
    this.stateList();
    this.campIdsList();
  }




  initializeForm() {
    this.volunteerMasterForm = this.fb.group({
      vId: ["", [Validators.required]],
      vRNumber: ["", [Validators.required]],
      uId: ["", [Validators.required]],
      firstName: ["", [Validators.required , Validators.minLength(3)]],
      middleName: ["", [Validators.required , Validators.minLength(3)]],
      lastName: ["", [Validators.required ,Validators.minLength(3)]],
      dob: ["", [Validators.required]],
      age: ["", [Validators.required]],
      mobile: ["", [Validators.required ,ValidateMobile , Validators.minLength(10)]],
      secondaryMobile: ["", [Validators.required]],
      primaryEmail: ["", [Validators.required , ValidateEmail]],
      address: this.fb.array([]),
    })
    this.addCAddress();
    this.addPAddress();
  }

  get address() {
    return this.volunteerMasterForm.controls['address'] as FormArray;
  }


  addCAddress() {
    this.cAddressForm = this.fb.group({
      addressLine1: ["", [Validators.required, Validators.minLength(6)]],
      addressLine2: ["", [Validators.required , Validators.minLength(6)]],
      locality: ["", [Validators.required , Validators.minLength(6)]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      district: ["", [Validators.required]],
      tehsil: ["", [Validators.required]],
      pin: ["", [Validators.required , Validators.minLength(6)]],
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
    this.pAddressForm = this.fb.group({
      addressLine1: ["", [Validators.required, Validators.minLength(6)]],
      addressLine2: ["", [Validators.required , Validators.minLength(6)]],
      locality: ["", [Validators.required , Validators.minLength(6)]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      district: ["", [Validators.required]],
      tehsil: ["", [Validators.required]],
      pin: ["", [Validators.required , Validators.minLength(6)]],
    })
    this.address.push(this.pAddressForm);
    let state = this.pAddressForm.controls['state']
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
          addressLine1: this.pAddressForm.value.addressLine1,
          addressLine2: this.pAddressForm.value.addressLine2,
          city: this.pAddressForm.value.city,
          country: "",
          district: this.pAddressForm.value.district,
          locality: this.pAddressForm.value.locality,
          pin: this.pAddressForm.value.pin,
          state: this.pAddressForm.value.state,
          tehsil: this.pAddressForm.value.tehsil,
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


  getValue() {
    let enrollId = this.volunteerMasterForm.value.vId
    this.volunteerService.validateEnrollmentNumber(enrollId)
      .subscribe((res: any) => {
        console.log(res)

      })
  }

  ////////////////////////////// for ng class
  get form() {
    return this.volunteerMasterForm.controls;
  }
  get c() {
    return this.cAddressForm.controls;
  }
  get p() {
    return this.pAddressForm.controls;
  }

}


