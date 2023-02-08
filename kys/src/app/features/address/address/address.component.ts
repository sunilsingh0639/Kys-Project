import { Component,OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address.service';
import {AbstractControl, FormGroup,FormControl,Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressForm! : FormGroup;

  constructor(private fb:FormBuilder) {}

ngOnInit(): void {
  
this.initlizationaddressForm();
  
}

initlizationaddressForm(){

this.addressForm = this.fb.group({

admin : [''],
state : [''],
district : [''],
book : ['']

});
}

}
