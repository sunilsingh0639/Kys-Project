import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}



  getUserList(){
    return this.http.get(ApiEnpoints.userList())

  }
  deleteByid(userid: string){
    return this.http.get(ApiEnpoints.deleteUser()+userid+'&active=false')
  }

  addNewUser(body:any){
    return this.http.post (ApiEnpoints.addUserList(), body)

  }

  editUser(data:any){
    return this.http.post(ApiEnpoints.addUserList()+'update',data);
  }

  getStateList(){
    return this.http.get(ApiEnpoints.stateList())
  }

  getDistrictList(selectedState : any){
    return this.http.get(ApiEnpoints.districtList()+selectedState)
  }

}



