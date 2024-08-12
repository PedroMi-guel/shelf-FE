import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor() { }

  getProfile() {
    const profile = localStorage.getItem('user');
    return profile ? JSON.parse(profile) : null;
  }

  updateProfile(profile: any) {
    localStorage.setItem('user', JSON.stringify(profile));
  }
}
