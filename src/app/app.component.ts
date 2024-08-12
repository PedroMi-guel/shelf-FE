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
      ruta: 'user'
    },

  ];
  navigateToPage(ruta:string){
    this.router.navigate([ruta])
  }




  ngOnInit(){
    console.log();

  }
}
