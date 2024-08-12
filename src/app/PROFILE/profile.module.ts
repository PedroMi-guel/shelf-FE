import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { RouterModule } from '@angular/router';
import { NavbarMnuComponent } from '../components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]),
    NavbarMnuComponent
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
