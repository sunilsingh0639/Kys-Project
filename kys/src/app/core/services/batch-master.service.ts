import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchMasterService {

  constructor(private http: HttpClient) { }

  getCampMasterList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-master/list', { 'headers': headers })
  }


  getBatchMasterList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/batch-master/list', { 'headers': headers })
  }


  getCampIdList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-master/campIdList', { 'headers': headers })
  }


  deleteBatchMaster(batchId: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/batch-master/deleteById?id=' + batchId, { 'headers': headers })
  }


  addNewBatchMaster(body: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/camp/batch-master/save', body, { 'headers': headers })
  }

  editBatchMaster(batchId: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/batch-master/batchById?id=' + batchId, { 'headers': headers })
  }
}
