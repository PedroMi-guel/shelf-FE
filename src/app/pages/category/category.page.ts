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

  async deleteCategory(category: Category){
    console.log(category);
    await this.categoryService.deleteCategory(category.id).subscribe((data)=>{
    });

    const index = this.categories.indexOf(category)
      this.categories.splice(index, 1);
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
