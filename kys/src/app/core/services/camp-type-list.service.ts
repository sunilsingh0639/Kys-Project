import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class CampTypeListService {

  constructor(private http: HttpClient) { }

  getCampTypeList() {
    return this.http.get(ApiEnpoints.campType()+'list')
  }

  deleteCampType(typeId: string) {
    return this.http.get(ApiEnpoints.campType()+'deleteById?id=' + typeId)
  }

  editCampType(body: any) {
    return this.http.post(ApiEnpoints.campType()+'edit', body)
  }

  addNewCampType(body: any) {
    return this.http.post(ApiEnpoints.campType()+'save', body)
  }

}
