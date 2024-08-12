import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'seccion',
    loadChildren: () => import('./pages/seccion/seccion.module').then( m => m.SeccionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'element',
    loadChildren: () => import('./pages/element/element.module').then( m => m.ElementPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shelf',
    loadChildren: () => import('./pages/shelf/shelf.module').then( m => m.ShelfPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-category',
    loadChildren: () => import('./pages/new-category/new-category.module').then( m => m.NewCategoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'page-details/:id',
    loadChildren: () => import('./pages/page-details/page-details.module').then( m => m.PageDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile', loadChildren: () => import('src/app/PROFILE/profile.module').then(m=> m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
