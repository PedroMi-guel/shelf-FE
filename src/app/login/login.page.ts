import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
formLogin:FormGroup;

  constructor(private formBuilder: FormBuilder, private ls: LoginService) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  iniciar(){
    this.ls.login(this.formLogin.value).subscribe((data)=>{
      console.log(data);
      console.log('se inicio sesión')
    })
  }

}
