import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Menu{
  name:string;
  icon:string;
  ruta:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages: Menu[]=[
    {
      name: 'Categorias',
      icon: 'bookmarks-outline',
      ruta:'../category'
    },
    {
      name: 'Carrito',
      icon: 'cart-outline',
      ruta:'../element'

    },
    {
      name: 'Mis pedidos',
      icon: 'bag-check-outline',
      ruta:'../home'

    },
  ];
  navigateToPage(ruta:string){
    this.router.navigate([ruta])
  }
  constructor(
    private router:Router
  ) {}

}
