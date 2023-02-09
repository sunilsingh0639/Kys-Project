import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address.service';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressForm!: FormGroup;
  selectedState: any;
  allDistrict: any;
  allStates: any;
  allAdmin : any;
  allBook : any;
  constructor(private fb: FormBuilder, private addressService: AddressService) {
    this.getState();
    // this.getDistrict();
    this.getAdmin();
    this.getBook();
  }

  ngOnInit(): void {

    this.initlizationaddressForm();

  }

  initlizationaddressForm() {

    this.addressForm = this.fb.group({

      admin: [''],
      state: [''],
      district: [''],
      book: ['']

    });
    this.addressForm.controls['state'].valueChanges
      .subscribe((res: any) => {
        this.selectedState = res
        this.addressService.getDistrictList(this.selectedState)
          .subscribe(res => {
            console.log(res)
            this.allDistrict = res
          })
      })
  }

 
  getState() {
    this.addressService.getStateList()
      .subscribe((res: any) => {
        console.log(res)
        this.allStates = res
      })
  }

  
  searchData(){
    let data = {
      admin : this.addressForm.value.admin,
      state : this.addressForm.value.state,
      bookId : this.addressForm.value.bookId,
      city : this.addressForm.value.city
      

    }
    this.addressService.getSearchData(data)
    .subscribe((res:any)=>{
      console.log(res)
      
    })
  }

  getAdmin(){
    this.addressService.getadminList()
    .subscribe((res:any)=>{
      console.log(res)
      this.allAdmin = res
    })
  }

  getBook(){
    this.addressService.getbookList()
    .subscribe((res:any)=>{
      console.log(res)
      this.allBook = res
    })
  }

  resetForm(){

    this.addressForm.reset();
    
  }


}
