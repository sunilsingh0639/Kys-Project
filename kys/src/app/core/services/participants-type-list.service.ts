import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsTypeListService {

  constructor(private http: HttpClient) { }

  getParticipantsTypeList() {
    return this.http.get(ApiEnpoints.participantsType()+'list')
  }

  deleteParticipantsType(typeId: string) {
    return this.http.get(ApiEnpoints.participantsType()+'deleteById?id=' + typeId)
  }

  editParticipantsType(body: any) {
    return this.http.post(ApiEnpoints.participantsType()+'edit', body)
  }

  addNewParticipantsType(body: any) {
    return this.http.post(ApiEnpoints.participantsType()+'save', body)
  }

}
