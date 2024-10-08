import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post('http://127.0.0.1:3000/api/users', user);
  }
}
