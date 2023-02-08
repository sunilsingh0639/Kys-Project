import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class BatchMasterService {

  constructor(private http: HttpClient) { }

  getCampMasterList() {
    return this.http.get(ApiEnpoints.campMaster() +'list')
  }


  getBatchMasterList() {
    return this.http.get(ApiEnpoints.batchMaster()+'list')
  }


  getCampIdList() {
    return this.http.get(ApiEnpoints.campMaster()+'campIdList')
  }


  deleteBatchMaster(batchId: string) {
    return this.http.get(ApiEnpoints.batchMaster()+'deleteById?id=' + batchId)
  }


  addNewBatchMaster(body: any) {
    return this.http.post(ApiEnpoints.batchMaster()+'save', body)
  }

  editBatchMaster(batchId: string) {
    return this.http.get(ApiEnpoints.batchMaster()+'batchById?id=' + batchId)
  }

  
}
