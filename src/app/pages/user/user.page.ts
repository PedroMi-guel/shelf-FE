import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../interfaces/user';

interface Menu{
  name:string;
  icon:string;
  ruta:string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})


export class UserPage  {

  users:User[] = [];


  pages: Menu[]=[
    {
      name: 'Categorias',
      icon: 'cart-outline',
      ruta:'../category'
    },
    {
      name: 'Carrito',
      icon: 'bookmarks-outline',
      ruta:'../element'

    },
    {
      name: 'Mis pedidos',
      icon: 'bag-check-outline',
      ruta:'../user'

    },
  ];
  navigateToPage(ruta:string){
    this.router.navigate([ruta])
  }

  constructor(
    private router:Router,
    private userService:UserService
  ) {
    this.userService.getUsers().subscribe((data)=>{
      console.log(data)
      this.users= data;
    })
  }


}
