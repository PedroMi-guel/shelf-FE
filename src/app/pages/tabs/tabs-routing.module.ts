import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'category',
        loadChildren: () => import('./tabs/category/category.module').then(m => m.CategoryPageModule)
      },
      {
        path: 'editar/:id',
        loadChildren: () => import('../edit-category/edit-category.module').then(m => m.EditCategoryPageModule)
      },
      {
        path: 'element/:id',
        loadChildren: () => import('../element/element.module').then(m => m.ElementPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./tabs/tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class TabsPageRoutingModule {}
