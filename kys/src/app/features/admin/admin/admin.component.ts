import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { ValidateEmail } from 'src/app/directives/emailValidator';
import { ValidateMobile } from 'src/app/directives/mobileValidator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  allStates: any;
  selectedState: any;
  allusers: any = [];
  selectedUserId: string = '';
  allDistrict: any;

  constructor(private admin: AdminService, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      searchKey: ['', [Validators.required]],
      name: ["", [Validators.required]],
      email: ['', [Validators.required , ValidateEmail]],
      fatherName: ['', [Validators.required]],
      region: ['', [Validators.required]],
      mobile: ['', [Validators.required , ValidateMobile]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
    this.getUserList();
    this.getState();
    this.adminForm.controls['state'].valueChanges
    .subscribe(res =>{
      this.selectedState = res
      this.admin.getDistrictList(this.selectedState)
      .subscribe(res => {
        console.log(res)
        this.allDistrict = res
      })


    })
  }

  getUserList() {
    this.admin.getUserList().subscribe((res: any) => {
      console.log(res);
      this.allusers = res;
    });
  }


  ngOnInit(): void {
    this.getUserList();
  }

  getState() {
    this.admin.getStateList()
      .subscribe((res: any) => {
        console.log(res)
        this.allStates = res
      })
  }
  editSelected!: number;
  addNewUser() {
    if (this.editSelected != null) {
      let data = {
        address : this.adminForm.value.address,
        name : this.adminForm.value.name,
        fatherName : this.adminForm.value.fatherName,
        city : this.adminForm.value.city,
        state : this.adminForm.value.state,
        mobile : this.adminForm.value.mobile,
        region : this.adminForm.value.region,
        email : this.adminForm.value.email,
        _id: this.allusers?.data[this.editSelected]._id


      }

      this.admin.editUser(data)
      .subscribe((res: any) => {
        console.log(res);
        this.getUserList();
      });
    }

    else {

      let data = {
        address : this.adminForm.value.address,
        name : this.adminForm.value.name,
        fatherName : this.adminForm.value.fatherName,
        city : this.adminForm.value.city,
        state : this.adminForm.value.state,
        mobile : this.adminForm.value.mobile,
        region : this.adminForm.value.region,
        email : this.adminForm.value.email,
        password : '',

      }

      this.admin.addNewUser(data)
      .subscribe((res: any) => {

        console.log(res);
        this.getUserList();
      });
    }
    // this.adminForm.reset();
  }


  //edit user
  editUser(i: number) {
    this.editSelected = i;
    this.adminForm.patchValue({
      name: this.allusers?.data[this.editSelected].name,
      email: this.allusers?.data[this.editSelected].email,
      address: this.allusers?.data[this.editSelected].address,
      city: this.allusers?.data[this.editSelected].city,
      region: this.allusers?.data[this.editSelected].region,
      fatherName: this.allusers?.data[this.editSelected].fatherName,
      state: this.allusers?.data[this.editSelected].state,
      mobile: this.allusers?.data[this.editSelected].mobile,
    });
  }

  ///delete user

  deleteUser() {

    this.admin.deleteByid(this.selectedUserId)
    .subscribe((res: any) => {
      console.log(res);
      this.getUserList();
    });
  }

  resetForm() {
    this.adminForm.reset()
  }

/////////// sorting and filtering
sortBy() { }

  public filterData: any
filter(searchKey: any) {
  if (searchKey && searchKey !== null) {
    this.adminForm.controls['searchKey'].valueChanges
      .subscribe((value: any) => {
        this.filterData = this.allusers?.data.filter(function (item: any) {
          return item.name.toLowerCase().match(value)
            // || item.books[0].toLowerCase().match(value);
        });
        this.allusers.data = this.filterData
      })
  }
  else {
    this.getUserList();
  }
}

}
