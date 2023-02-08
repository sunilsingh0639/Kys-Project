import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriberService } from 'src/app/core/services/subscriber.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class subscriberComponent {
  constructor(private service: SubscriberService, private fb: FormBuilder) {

    this.display()
    this.gettingAdmin()
    this.gettingBook()
    this.gettingPlan()
    this.gettingState()
    this.gettingDistrict()

  }
  selectedState!: string
  subscriberForm!: FormGroup
  usersList: any
  bookList: any
  planList: any
  stateList: any
  districtList: any
  ApiList: any
  showHeading!: Boolean | false;



  display() {
    this.subscriberForm = this.fb.group({
      admin: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      sdate: ['', [Validators.required]],
      edate: ['', [Validators.required]],
      status: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      book: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      maker: ['', [Validators.required]],
      voucher: ['', [Validators.required]],

    })
    this.subscriberForm.controls['state'].valueChanges
      .subscribe((res: any) => {
        this.subscriberForm.value.state = res
        this.gettingDistrict();
      })
  }

  gettingAdmin() {
    this.service.getUsersList()
      .subscribe(res => {
        console.log(res)
        this.usersList = res
      })
  }

  gettingBook() {
    this.service.getBookList()
      .subscribe(res => {
        console.log(res)
        this.bookList = res
      })
  }

  gettingPlan() {
    this.service.getPlanList()
      .subscribe(res => {
        console.log(res)
        this.planList = res
      })
  }
  gettingState() {
    this.service.getStateList()
      .subscribe(res => {
        this.stateList = res
      })

  }
  gettingDistrict() {
    this.service.getDistrictList(this.subscriberForm.value.state)
      .subscribe(res => {
        this.districtList = res
      })
  }

  get f() { 
    return this.subscriberForm.controls 
  }

  newArray: any = []
  gettingaApi() {
    let apiObject = {
      admin: "61ddac3a0dd0d864990122f7",
      bookId: "",
      city: "",
      endDate: null,
      maker: "",
      mobile: "",
      planId: "",
      startDate: null,
      state: "",
      status: true,
      voucherNumber: "",
    }
    this.service.getApiList(apiObject)
      .subscribe(res => {
        console.log(res)
        this.ApiList = res
        if (this.subscriberForm.value.plan !== undefined) {
          this.ApiList?.data.forEach((element: any) => {
            let ids = element._id
            this.service.getSelectedProfile(ids)
              .subscribe((res: any) => {
                let selectedProfiles = res
                selectedProfiles?.data.subcriptions.forEach((ele: any) => {
                  if (ele.name == this.subscriberForm.value.plan) {
                    let newApi = this.ApiList?.data.filter((item: any) => {
                      return item.name == selectedProfiles?.data._doc.name
                    })
                    console.log(newApi)
                    this.ApiList?.data == newApi
                  }
                })
              })
          })
        }
        else {
          this.ApiList = res
        }
      })
    this.showHeading = true;

  }

  resetForm() {
    this.subscriberForm.reset()
  }


  selectedUserData: any

  selectedUserList(i: number) {
    this.service.getSelectedProfile(this.ApiList?.data[i]._id)
      .subscribe((res: any) => {
        console.log(res)
        this.selectedUserData = res
        this.service.setData(this.selectedUserData)
      })

  }
}
