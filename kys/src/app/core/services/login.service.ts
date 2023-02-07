import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/modals/login-request';
import { ApiEnpoints } from '../api-endponts';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(body: LoginRequest){
    return this.http.post(ApiEnpoints.login(), body);
  }
}
