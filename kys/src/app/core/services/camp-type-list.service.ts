import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampTypeListService {

  constructor(private http: HttpClient) { }

  getCampTypeList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-type/list', { 'headers': headers })
  }

  deleteCampType(typeId: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/camp-type/deleteById?id=' + typeId, { 'headers': headers })
  }

  editCampType(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/camp/camp-type/edit', body, { 'headers': headers })
  }

  addNewCampType(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/camp/camp-type/save', body, { 'headers': headers })
  }

}
