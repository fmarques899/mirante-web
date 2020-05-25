import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PersonRequest } from '../shared/models/person-request.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private HTTP_OPTIONS = {
    headers: {
      'Authorization': localStorage.getItem('authorization')
    }
  }

  constructor(private http: HttpClient) { }

  detail(id: number) {
    return this.http.get(`${environment.apiUrl}/persons/detail/${id}`, this.HTTP_OPTIONS);
  }
  
  list() {
    return this.http.get(`${environment.apiUrl}/persons/list`, this.HTTP_OPTIONS);
  } 

  save(person: PersonRequest) {
    return this.http.post(`${environment.apiUrl}/persons/register`, person, this.HTTP_OPTIONS);
  }

  remove(id: number) {
    return this.http.delete(`${environment.apiUrl}/persons/remove/${id}`, this.HTTP_OPTIONS);
  }

  edit(person: PersonRequest) {
    return this.http.put(`${environment.apiUrl}/persons/update`, person, this.HTTP_OPTIONS);
  }
}
