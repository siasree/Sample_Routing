import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      fullName: new FormControl(' '),
      email: new FormControl(' '),
      password: new FormControl(' '),
      reEnterPassword: new FormControl(' ')
    });
  }
  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
