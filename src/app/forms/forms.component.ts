import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
useform: FormGroup;

constructor(private fb: FormBuilder){
  this.useform= this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required,  Validators.email]],
    password: ['', [Validators.required,  Validators.minLength(8)]],
    phoneNumber: ['', [Validators.required,  Validators.minLength(9)]],
  })
}

onSubmit(){
  if(this.useform.valid){
    console.log('მონაცემები:', this.useform.value)
  }else{
    console.log('ფორმის შევსება ვერ მოხერხდა')
  }
}
}
