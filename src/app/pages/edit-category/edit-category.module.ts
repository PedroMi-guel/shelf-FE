import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditCategoryPageRoutingModule } from './edit-category-routing.module';
import { EditCategoryPage } from './edit-category.page';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCategoryPageRoutingModule,
    ReactiveFormsModule,
    NavbarMnuComponent,
  ],
  declarations: [EditCategoryPage]
})
export class EditCategoryPageModule {}

