import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { TextPipe } from 'src/app/pipes/text.pipe';
import { ShelfPageModule } from '../shelf/shelf.module';
import { NavbarMnuComponent } from "../../components/navbar-mnu/navbar-mnu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    NavbarMnuComponent,
],
  declarations: [CategoryPage, TextPipe]
})
export class CategoryPageModule {}
