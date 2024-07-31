import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>('http://localhost:3000/api/categories');
  }

  getCategory(id: number) {
    return this.http.get<Category>(`http://localhost:3000/api/categories/${id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>('http://localhost:3000/api/categories', category);
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(`http://localhost:3000/api/categories/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:3000/api/categories/${id}`);
  }

  fetchElemnt() {
    return this.http.delete(`http://localhost:3000/api/categories/serach`);
  }
}
