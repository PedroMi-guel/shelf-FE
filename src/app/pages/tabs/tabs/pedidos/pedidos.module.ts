import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

import { PedidosPage } from './pedidos.page';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { NavbarMnuComponent } from 'src/app/components/navbar-mnu/navbar-mnu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule,
    DetailsComponent,
    NavbarMnuComponent
  ],
  declarations: [PedidosPage]
})
export class PedidosPageModule {}
