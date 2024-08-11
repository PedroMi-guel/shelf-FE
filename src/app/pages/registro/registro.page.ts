import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private rs:RegistroService
  ) { }
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.minLength(8)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),

  });


  ngOnInit() {
  }

  register(){
    this.rs.register(this.form.value).subscribe((data)=>{
      console.log(data)
    })
  }

}
