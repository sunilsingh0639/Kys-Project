import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  getPlanList() {
    return this.http.get(ApiEnpoints.plans()+'list')
  }

  deletePlanById(planid: string) {
    return this.http.get(ApiEnpoints.plans()+'deleteById?id=' + planid)
  }

  editPlan(body: any) {
    return this.http.post(ApiEnpoints.plans()+'update', body)
  }

  addNewPlan(body: any) {
    return this.http.post(ApiEnpoints.plans(), body)
  }

}
