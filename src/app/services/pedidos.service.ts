import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http:HttpClient) { }

  getPedidos(){
    return this.http.get('http://127.0.0.1:3000/api/records')
  }
}
