import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./pages/seccion/seccion.module').then( m => m.SeccionPageModule)
  },
  {
    path: 'element',
    loadChildren: () => import('./pages/element/element.module').then( m => m.ElementPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'shelf',
    loadChildren: () => import('./pages/shelf/shelf.module').then( m => m.ShelfPageModule)
  },
  {
    path: 'new-category',
    loadChildren: () => import('./pages/new-category/new-category.module').then( m => m.NewCategoryPageModule)
  },
  {
    path: 'page-details/:id',
    loadChildren: () => import('./pages/page-details/page-details.module').then( m => m.PageDetailsPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
