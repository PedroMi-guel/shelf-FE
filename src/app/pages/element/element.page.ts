import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.page.html',
  styleUrls: ['./element.page.scss'],
})
export class ElementPage {
  idC:any;
  constructor(
    private router:Router,
    private categoryService:CategoryService,
    private Ar: ActivatedRoute,
  ) {this.Ar.params.subscribe(
    (params:any)=>{
      this.idC=Number(params.id)
      console.log(params);
      console.log(this.idC)
  })}
}
