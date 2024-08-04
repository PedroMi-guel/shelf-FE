import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from './../../interfaces/category';

interface Image {
  name: string;
  data: any;
}
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss'],
})
export class NewCategoryPage  {

  newCategory:Category={
    id:0,
    name: '',
    description: '',
    image:'',
    folder: 'Category'
  };

  constructor(
    private categoryService: CategoryService
  ) { }

  setImage(_event:any) {
    this.newCategory.file = _event.target.files![0]
  }


  addCategory(){
    // const fromData=new FormData();
    // fromData.append('name', this.newCategory.name)
    // fromData.append('description', this.newCategory.description)
    // fromData.append('image', this.newCategory.image)
    console.log(this.newCategory)

    this.categoryService.createCategory(this.newCategory)
      .subscribe(
        (Category) => {
          console.log('Categoria creado:', Category);
          // Limpiar el formulario
          this.newCategory = {
            id:0,
            name: '',
            description: '',
            image: '',
            folder:'Category'
          };
        },
        (error) => {
          console.error('Error al crear LA CATEGORÍA:', error);
        }
      );
  }


}
