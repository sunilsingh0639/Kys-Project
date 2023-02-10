import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;

  allusers: any = [];
  selectedUserId: string = '';

  constructor(private admin: AdminService, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      searchKey: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      region: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.getUserList();
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
  editSelected!: number;
  addNewUser() {
    if (this.editSelected) {
      var formData = new FormData();
      formData.append('name', this.adminForm.controls['name']?.value);
      formData.append('email', this.adminForm.controls['email']?.value);
      formData.append('password', this.adminForm.controls['password']?.value);
      formData.append('city', this.adminForm.controls['city']?.value);
      formData.append('address', this.adminForm.controls['address']?.value);
      formData.append('state', this.adminForm.controls['state']?.value);
      formData.append('fname', this.adminForm.controls['fname']?.value);
      formData.append('region', this.adminForm.controls['region']?.value);
      formData.append('mobile', this.adminForm.controls['mobile']?.value);
      formData.append('_id', this.allusers.data[this.editSelected]._id);

      this.admin.editUser(formData).subscribe((res: any) => {
        console.log(res);
        this.getUserList();
      });
    } else {
      var formData = new FormData();
      formData.append('name', this.adminForm.controls['name']?.value);
      formData.append('email', this.adminForm.controls['email']?.value);
      formData.append('password', this.adminForm.controls['password']?.value);
      formData.append('city', this.adminForm.controls['city']?.value);
      formData.append('address', this.adminForm.controls['address']?.value);
      formData.append('state', this.adminForm.controls['state']?.value);
      formData.append('fname', this.adminForm.controls['fname']?.value);
      formData.append('region', this.adminForm.controls['region']?.value);
      formData.append('mobile', this.adminForm.controls['mobile']?.value);
      formData.append('_id', this.allusers.data[this.editSelected]._id);

      this.admin.addNewUser(formData).subscribe((res: any) => {
        console.log(res);
        this.getUserList();
      });
    }
    this.adminForm.reset();
  }

  editUser(i: number) {
    this.editSelected = i;
    this.adminForm.patchValue({
      name: this.allusers.data[this.editSelected].name,
      email: this.allusers.data[this.editSelected].email,
      address: this.allusers.data[this.editSelected].address,
      city: this.allusers.data[this.editSelected].city,
      region: this.allusers.data[this.editSelected].region,
      fname: this.allusers.data[this.editSelected].fname,
      password: this.allusers.data[this.editSelected].password,
      state: this.allusers.data[this.editSelected].state,
      mobile: this.allusers.data[this.editSelected].mobile,
    });
  }

  ///delete user

  deleteUser() {
    // console.log(this.selectedUserId);
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
