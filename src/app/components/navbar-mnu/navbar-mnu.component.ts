import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonMenuButton } from '@ionic/angular';
import { IonButtons, IonHeader, IonToolbar } from "@ionic/angular/standalone";
import { NgModule } from '@angular/core';

interface Menu{
  name:string;
  icon:string;
  ruta:string;
}


@Component({
  selector: 'app-navbar-mnu',
  templateUrl: './navbar-mnu.component.html',
  styleUrls: ['./navbar-mnu.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ]

})
export class NavbarMnuComponent {
  @Input() title!:string;

  constructor(
    private router:Router,
  ) { }


}
