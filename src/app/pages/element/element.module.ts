import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementPageRoutingModule } from './element-routing.module';

import { ElementPage } from './element.page';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementPageRoutingModule,
    NavbarMnuComponent,
  ],
  declarations: [ElementPage]
})
export class ElementPageModule {}
