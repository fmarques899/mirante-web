import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/login`, {login: login, password: password});
  }
}
