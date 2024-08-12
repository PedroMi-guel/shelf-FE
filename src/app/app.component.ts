import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

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
  constructor(private router:Router, private loginService:LoginService) {}



  pages: Menu[]=[
    {
      name: 'Perfil',
      icon: 'person-outline',
      ruta: 'profile'
    },

  ];
  navigateToPage(ruta:string){
    this.router.navigate([ruta])
  }

  navigateToHome(){
    this.router.navigate(['/'])
  }

  logout(){
    this.loginService.logout()
  }

  ngOnInit(){
    console.log();

  }
}
