import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu{
  name:string;
  icon:string;
  ruta:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router:Router) {}



  pages: Menu[]=[
    {
      name: 'Perfil',
      icon: 'person-outline',
      ruta: './tabs/category'
    },
    {
      name: 'Salir',
      icon: 'log-out-outline',
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




  ngOnInit(){
    console.log();

  }
}
