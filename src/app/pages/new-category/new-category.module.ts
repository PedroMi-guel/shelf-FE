import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCategoryPageRoutingModule } from './new-category-routing.module';

import { NewCategoryPage } from './new-category.page';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCategoryPageRoutingModule,
    ReactiveFormsModule,
    NavbarMnuComponent,
  ],
  declarations: [NewCategoryPage]
})
export class NewCategoryPageModule {}
