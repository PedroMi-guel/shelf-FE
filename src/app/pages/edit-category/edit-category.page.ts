import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

interface Image {
  name: string;
  data: any;
}

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})

export class EditCategoryPage  {
  categoria:any;
  idC:any;

  selectedFile:File | undefined;


  constructor(
    private router:Router,
    private categoryService:CategoryService,
    private Ar: ActivatedRoute,
  ) {


    this.Ar.params.subscribe(
      (params:any)=>{
        this.idC=Number(params.id)
        console.log(params);
        console.log(this.idC)

        this.categoryService.getCategory(this.idC).subscribe((data) => {
          this.categoria = data;
          console.log(this.categoria)
        });
    })
  }


categoryForm=new FormGroup(
  {
    id:new FormControl<number>(0,Validators.required),
    name:new FormControl<string>('',Validators.required),
    description:new FormControl<string>('',Validators.required),
    folder:new FormControl<string>('',Validators.required)
  }

)

  setImage(_event:any) {
    this.selectedFile = _event.target.files![0] as File;
  }

  updateCategory(){
    const formData=new FormData();
    formData.append('name', this.categoryForm.value.name as string);
    formData.append('description', this.categoryForm.value.description as string);
    formData.append('file',  this.selectedFile! as File);
    formData.append('folder','Category');

    if(this.selectedFile){
      this.categoryService.updateCategory(formData).subscribe(
        (Category)=>{
          console.log('Categoria editada con éxito: ', Category);
        this.categoryForm.reset()
        this.router.navigate(['/tabs/category'])
        }
      );
    }
    else{
      console.error('Error', Error)

    }
  }





}
