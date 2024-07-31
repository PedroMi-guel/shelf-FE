/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories:Category[]=[];

  navigateToNew(){
    this.router.navigate(['../new-category'])
  }

  async deleteCategory(categoryId: number){
    console.log(categoryId);
    this.categoryService.deleteCategory(categoryId);
    console.log('categoryIddeleted');
  }


  constructor(
    private alertController: AlertController,
    private router:Router,
    private categoryService:CategoryService
  ) {
    this.categoryService.getCategories().subscribe((data)=>{
      console.log(data)
      this.categories=data;
    })}

  ngOnInit() {
  }

}
