import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  loginSetting(body: any): any {
    return this.http.post('http://103.224.246.103:3004/login', body);
    ////////// shrikysangh1946@gmail.com
  }
}
