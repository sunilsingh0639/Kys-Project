import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }
  getUsersList() {
    const link = "http://103.224.246.103:3004/user/list"
     return this.http.get(link)
  }

  

  getBookList() {
    const url = "http://103.224.246.103:3004/book/list"
    return this.http.get(url)
  }

  getPlanList() {
    const url = "http://103.224.246.103:3004/plan/list/names"
      return this.http.get(url)
  }

  getStateList() {
    const url = "http://103.224.246.103:3004/common/states/list"
    return this.http.get(url)
  }
  getDistrictList(selectedState: any) {
    const url = "http://103.224.246.103:3004/common/distByState?state="
    return this.http.get(url + selectedState)
  }
  getApiList(body: any) {
    const url = "http://103.224.246.103:3004/subscriber/search"
    return this.http.post(url, body)
  }

  /*
  **API for Profile Component
  */

  getSelectedProfile(userid: string) {
    return this.http.get('http://103.224.246.103:3004/subscriber/getUserProfile/' + userid)
  }

  private subject = new Subject(); //Decalring new RxJs Subject

  setData(data: any) {
    return this.subject.next(data)
  }

  getData(): Observable<any> {
    return this.subject.asObservable()
  }

  getPlan_List() {
    const url = "http://103.224.246.103:3004/plan/list"
    return this.http.get(url)
  }

  getState_List() {
    const url = "http://103.224.246.103:3004/common/states/list"
    return this.http.get(url)
  }

}
