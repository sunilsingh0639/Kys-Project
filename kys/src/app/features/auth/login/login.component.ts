import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  reactiveForm!: FormGroup

  constructor(private log: LoginService, private fb_: FormBuilder, private _route: Router) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb_.group({
      email: ["", [Validators.required,]],
      password: ["", [Validators.required]]
    })
  }

  onLogin() {
    this.log.loginSetting(this.reactiveForm.value)
      .subscribe((response: any) => {
        console.log(response)
        sessionStorage.setItem('token', response.token)
        this._route.navigate(['./app/dashboard'])
      })
  }

}
