import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerMasterService {

  constructor(private http: HttpClient) { }


  isVolunteerList(isValid: boolean) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/volunteer-master/list?isVolunteer=' + isValid, { 'headers': headers })
  }

  getStatesList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/common/states/list', { 'headers': headers })
  }

  getCampIdList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-master/campIdList', { 'headers': headers })
  }

  getDistrictList(dist: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/common/distByState?state=' + dist, { 'headers': headers })
  }

  editVolunteerDetails(id :any){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-master/volunteerById?id=' + id, { 'headers': headers })
  }



  private subject = new Subject

  setVolunteerData(data : any){
    this.subject.next(data)
  }

  getVolunteerData(): Observable<any>{
    return this.subject.asObservable();
  }

}
