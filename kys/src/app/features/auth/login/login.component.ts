import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { ValidateEmail } from 'src/app/directives/emailValidator';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private loginService: LoginService, private fb_: FormBuilder, private _route : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb_.group({
      email: ["", [Validators.required ,ValidateEmail]],
      password: ["", [Validators.required]]
    })
  }
  get form(){
    return this.loginForm.controls
  }

  onLogin() {
    this.loginService.login(this.loginForm.value)
      .subscribe((response: any) => {
        console.log(response)
        sessionStorage.setItem('token',response.token)
        this._route.navigate(['./app/dashboard'])
      })
  }
}
