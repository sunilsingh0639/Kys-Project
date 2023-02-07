import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  getPlanList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/plan/list', { 'headers': headers })
  }

  deletePlanById(planid: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/plan/deleteById?id=' + planid, { 'headers': headers })
  }

  editPlan(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/plan/update', body, { 'headers': headers })
  }

  addNewPlan(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/plan', body, { 'headers': headers })
  }

}
