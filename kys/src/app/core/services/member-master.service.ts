import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class MemberMasterService {

  constructor(private http : HttpClient) { }

  getMemberMasterList(){
    return this.http.get(ApiEnpoints.volunteerMaster()+'list?isVolunteer=false')
  }

  editMemberDetails(id : any){
    return this.http.get(ApiEnpoints.campMaster()+'volunteerById?id='+ id)
  }

  getStatesList() {
    return this.http.get(ApiEnpoints.stateList())
  }

  getCampIdList() {
    return this.http.get(ApiEnpoints.campMaster() + 'campIdList')
  }

  getDistrictList(dist: any) {
    return this.http.get(ApiEnpoints.districtList() + dist)
  }

  validateEnrollmentNumber(vId: any) {
    return this.http.get(ApiEnpoints.campMaster() + 'validate-enrollment-number?id=' + vId)
  }


  addMemberMaster(body: object) {
    return this.http.post(ApiEnpoints.volunteerMaster() + 'save', body)
  }




  private subject = new Subject

  setMemberMasterData(data: any) {
    this.subject.next(data)
  }
  
  getMemberMasterData(): Observable < any > {
    return this.subject.asObservable();
  }

}
