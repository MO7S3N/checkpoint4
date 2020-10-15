import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_AUTH_LINK='https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http : HttpClient) { }
  login(Credentials)
  {
    return this.http.post<any>(API_AUTH_LINK,Credentials);
  }

}
