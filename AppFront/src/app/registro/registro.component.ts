import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  formGroup: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder
  ){
    this.formGroup = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      crossId:['',[Validators.required,Validators.minLength(17),Validators.maxLength(17)]],
      crossPassword:['',[Validators.required,Validators.minLength(6)]],
    })
  }

    registro(){

    }
}
