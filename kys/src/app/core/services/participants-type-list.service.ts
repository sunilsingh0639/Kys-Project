import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsTypeListService {

  constructor(private http: HttpClient) { }

  getParticipantsTypeList() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/participants-type/list', { 'headers': headers })
  }

  deleteParticipantsType(typeId: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get('http://103.224.246.103:3004/camp/participants-type/deleteById?id=' + typeId, { 'headers': headers })
  }

  editParticipantsType(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/camp/participants-type/edit', body, { 'headers': headers })
  }

  addNewParticipantsType(body: any) {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.post('http://103.224.246.103:3004/camp/participants-type/save', body, { 'headers': headers })
  }

}
