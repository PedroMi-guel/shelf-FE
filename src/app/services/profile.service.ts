import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private storageKey = 'userProfile';

  constructor() { }

  getProfile() {
    const profile = localStorage.getItem(this.storageKey);
    return profile ? JSON.parse(profile) : null;
  }

  updateProfile(profile: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(profile));
  }
}
