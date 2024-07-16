import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.minLength(8)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),

  });


  ngOnInit() {
  }

}
