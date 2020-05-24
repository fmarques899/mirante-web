import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    const options = {
      headers: {
        'Authorization': localStorage.getItem('authorization')
      }
    }
    return this.http.get(`${environment.apiUrl}/users/detail`, options);
  }

}
