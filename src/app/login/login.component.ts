import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm.get('login').value, this.loginForm.get('password').value).subscribe(res => {
      localStorage.setItem('authorization', res['authorization']);
      this.router.navigate(['/dashboard']);
      console.log('Endereçar para dashboard....')
    });
  }
}
