import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelfPage } from './shelf.page';
import { CategoryComponent } from 'src/app/components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: ShelfPage,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      }
    ]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShelfPageRoutingModule {}
