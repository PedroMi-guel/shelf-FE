import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShelfPageRoutingModule } from './shelf-routing.module';

import { ShelfPage } from './shelf.page';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShelfPageRoutingModule,
    NavbarMnuComponent,

  ],
  declarations: [ShelfPage],
  exports:[ShelfPageRoutingModule]
})
export class ShelfPageModule {}
