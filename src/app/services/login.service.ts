import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(login:any){
    return this.http.post('http://127.0.0.1:3000/api/auth/login', login);
  }

  saveCredentials(data:any){
    localStorage.setItem('token', JSON.stringify(data.access_token));

    localStorage.setItem('user', JSON.stringify(data.user));
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
