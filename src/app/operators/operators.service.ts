import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
import { HttpClient, HttpRequest } from '@angular/common/http';
import { OperatorRequest } from '../shared/models/operator-request.model';
@Injectable()
export class OperatorsService {

  private HTTP_OPTIONS = {
    headers: {
      'Authorization': localStorage.getItem('authorization')
    }
  }
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.apiUrl}/operators/list`, this.HTTP_OPTIONS);
  } 

  save(operator: OperatorRequest) {
    return this.http.post(`${environment.apiUrl}/operators/register`, operator, this.HTTP_OPTIONS);
  }
}
