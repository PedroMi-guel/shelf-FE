import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NavbarMnuComponent,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
