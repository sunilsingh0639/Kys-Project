import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberMasterService } from 'src/app/core/services/member-master.service';
import { ValidateEmail } from 'src/app/directives/emailValidator';
import { ValidateMobile } from 'src/app/directives/mobileValidator';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {


  memberMasterForm!: FormGroup
  allStates: any;
  allCamps: any;
  allDistrcicts0: any;
  allDistrcicts1: any;
  cAddressForm!: FormGroup ;
  pAddressForm!: FormGroup ;



  constructor(private fb: FormBuilder, private addMemberService: MemberMasterService,
    private route: Router) {
    this.initializeForm();
    this.stateList();
    this.campIdsList();
  }




  initializeForm() {
    this.memberMasterForm = this.fb.group({
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
    return this.memberMasterForm.controls['address'] as FormArray;
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
        this.addMemberService.getDistrictList(res)
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
        this.addMemberService.getDistrictList(res)
          .subscribe((res: any) => {
            this.allDistrcicts1 = res
          })
      })
  }


  stateList() {
    this.addMemberService.getStatesList()
      .subscribe((res: any) => {
        this.allStates = res
      })
  }

  campIdsList() {
    this.addMemberService.getCampIdList()
      .subscribe((res: any) => {
        this.allCamps = res
      })
  }

  addMemberMaster() {
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
      age: this.memberMasterForm.value.age,
      batchId: null,
      campId: null,
      dob: new Date(this.memberMasterForm.value.dob).getTime(),
      firstName: this.memberMasterForm.value.firstName,
      isVolunteer: false,
      lastName: this.memberMasterForm.value.middleName,
      middleName: this.memberMasterForm.value.lastName,
      mobile: this.memberMasterForm.value.mobile,
      newCount: null,
      oldCount: null,
      primaryEmail: this.memberMasterForm.value.primaryEmail,
      secondaryEmail: "",
      secondaryMobile: this.memberMasterForm.value.secondaryMobile,
      totalCount: null,
      uId: this.memberMasterForm.value.uId,
      vCount: null,
      vId: Number(this.memberMasterForm.value.vId),
      vRNumber: this.memberMasterForm.value.vRNumber,
    }
    this.addMemberService.addMemberMaster(data)
      .subscribe((res: any) => {
        console.log(res)
      })

    this.route.navigate(['/app/manage-camp/member-master'])
  }


  getValue() {
    let enrollId = this.memberMasterForm.value.vId
    this.addMemberService.validateEnrollmentNumber(enrollId)
      .subscribe((res: any) => {
        console.log(res)

      })
  }

  ////////////////////////////// for ng class
  get form() {
    return this.memberMasterForm.controls;
  }
  get c() {
    return this.cAddressForm.controls;
  }
  get p() {
    return this.pAddressForm.controls;
  }

}


