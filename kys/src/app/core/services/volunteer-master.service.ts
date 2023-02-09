import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class VolunteerMasterService {

  constructor(private http: HttpClient) { }


  isVolunteerList() {
    return this.http.get(ApiEnpoints.volunteerMaster() + 'list?isVolunteer=true')
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

  editVolunteerDetails(id: any) {
    return this.http.get(ApiEnpoints.campMaster() + 'volunteerById?id=' + id)
  }

  addVolunteerMaster(body: object) {
    return this.http.post(ApiEnpoints.volunteerMaster() + 'save', body)
  }

  validateEnrollmentNumber(vId: any) {
    return this.http.get(ApiEnpoints.campMaster() + 'validate-enrollment-number?id=' + vId)
  }



  private subject = new Subject

setVolunteerData(data: any) {
  this.subject.next(data)
}

getVolunteerData(): Observable < any > {
  return this.subject.asObservable();
}

}
