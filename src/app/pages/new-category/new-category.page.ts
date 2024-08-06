import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Route, Router } from '@angular/router';

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
selectedFile:File | undefined;
categoryForm=new FormGroup(
  {
    id:new FormControl<number>(0,Validators.required),
    name:new FormControl<string>('',Validators.required),
    description:new FormControl<string>('',Validators.required),
    folder:new FormControl<string>('',Validators.required)
  }
)


  constructor(
    private categoryService: CategoryService,
    private router:Router,
  ) { }

  setImage(_event:any) {
    this.selectedFile = _event.target.files![0] as File;
  }


  addCategory(){
    const formData=new FormData();
    formData.append('name', this.categoryForm.value.name as string);
    formData.append('description', this.categoryForm.value.description as string);
    formData.append('file', this.selectedFile! as File);
    formData.append('folder','Category');

    if(this.selectedFile){
      this.categoryService.createCategory(formData).subscribe(
        (Category)=>{
          console.log('Categoria crreada con éxito: ', Category);
        this.categoryForm.reset()
        this.router.navigate(['/category'])
        }
      );
    }
    else{
      console.error('Error', Error)

    }
  }
}
