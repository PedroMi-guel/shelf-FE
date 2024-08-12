import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // Aquí deberías verificar si el usuario está autenticado,
    // por ejemplo, comprobando si existe un token válido en el almacenamiento local.
    const token = localStorage.getItem('token');
    return !!token;
  }
}
