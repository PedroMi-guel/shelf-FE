import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Element } from '../interfaces/element';
@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http:HttpClient) { }

  getElemntss() {
    return this.http.get<Element[]>('http://localhost:3000/api/elements');
  }

  getElement(id: number) {
    return this.http.get<Element>(`http://localhost:3000/api/elements/${id}`);
  }

  createElemnt(element: Element) {
    return this.http.post<Element>('http://localhost:3000/api/elements', element);
  }

  updateElement(element: Element) {
    return this.http.put<Element>(`http://localhost:3000/api/elements/${element.id}`, element);
  }

  deleteElemnt(id: number) {
    return this.http.delete(`http://localhost:3000/api/elements/${id}`);
  }

  fetchElemnt() {
    return this.http.delete(`http://localhost:3000/api/elements/serach`);
  }
}
