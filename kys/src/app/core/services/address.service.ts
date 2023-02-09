import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }

  getStateList(){
    return this.http.get(ApiEnpoints.stateList())
  }

  getDistrictList(selectedState : any){
    return this.http.get(ApiEnpoints.districtList() + selectedState)
  }

  getadminList(){

    return this.http.get(ApiEnpoints.userList() + 'names')
  }

  getbookList(){
    return this.http.get(ApiEnpoints.books() + 'list')
  }

  getSearchData(body : any){
    return this.http.post(ApiEnpoints.subscriptionList()+'address' , body)
  }

  
}
