import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    login: [{value: '', disabled: false}, Validators.required],
    password: [{value: '', disabled: false}, Validators.required]
  })

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm.get('login').value, this.loginForm.get('password').value).subscribe(res => {
      console.log(res);
    });
  }
}
