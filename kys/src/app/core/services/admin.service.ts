import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}



  getUserList(){
    return this.http.get(ApiEnpoints.userList())

  }
  deleteByid(userid: string){
    return this.http.get(ApiEnpoints.deleteUser()+userid+'&active=false')
  }

  addNewUser(body:any){
    return this.http.post (ApiEnpoints.addUserList(), body)

  }

  editUser(body:any){
    return this.http.post(ApiEnpoints.addUserList()+'update',body)
  }


}
  // addNewUser(body: any) {
  //   const headers = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${sessionStorage.getItem('token')}`
  //   );
  //   return this.http.post(' http://103.224.246.103:3004/user', body, {
  //     headers: headers,
  //   });
  // }

  // editUser(body: any) {
  //   const headers = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${sessionStorage.getItem('token')}`
  //   );
  //   return this.http.post('http://103.224.246.103:3004/user/update', body, {
  //     headers: headers,
  //   });
  // }

  // deleteByid(userid: string) {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
  //   return this.http.get(
  //     'http://103.224.246.103:3004/user/deleteById?id' + userid,
  //     { headers: headers }
  //   );
  // }


