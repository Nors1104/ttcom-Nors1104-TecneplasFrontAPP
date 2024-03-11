import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup: FormGroup;
  
  constructor(
    private readonly formBuilder: FormBuilder
  ){
    this.formGroup = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
  }

    login(){
      if(this.formGroup.valid){
        /* alert(this.formGroup.value.email+this.formGroup.value.password); */
        const email =this.formGroup.value.email;
        const password =this.formGroup.value.password;
/*         const body = JSON.stringify({
          email: "",
          passwod: "1234",
        }); */
        var datos;
        $.post(`http://localhost:8000/users/login?email=${email}&password=${password}`, (data, status) => {   
          /* console.log(data); */
          console.log(data);
          datos =data;
        });
        console.log(datos);
      }
      else{
        alert("Datos erroneos");
      }
      
    }
/*   login(form:NgForm) {
    const email =form.value.email;
    const password= form.value.password;
    if(email == "perry"){
      alert("IGUAl");
    }
    
  } */
  /* 
  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  } */
}
