/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];
  selectedCategory: Category | null = null;
  newCategory: Category = {
    name: '', description: '', image: '',
    id: 0
  };

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }


}
