import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getElemntss() {
    return this.http.get<Userr[]>('http://localhost:3000/api/users');
  }

  getUser(id: number) {
    return this.http.get<User>(`http://localhost:3000/api/users/${id}`);
  }

  createElemnt(user: User) {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`http://localhost:3000/api/users/${user.id}`, User);
  }

  deleteElemnt(id: number) {
    return this.http.delete(`http://localhost:3000/api/users/${id}`);
  }
}
