import { Component, Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

interface Menu{
  name:string;
  icon:string;
  ruta:string;
}

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.page.html',
  styleUrls: ['./shelf.page.scss'],
})

export class ShelfPage {

  pages: Menu[]=[
    {
      name: 'Perfil',
      icon: 'person-outline',
      ruta: 'category'
    },
    {
      name: 'Cerar sesión',
      icon: 'log-out--outline',
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
    private router:Router,
  ) { }


}
