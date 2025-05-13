import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  exibe : boolean = false;
  loginForm : FormGroup;
  @Output() userOutput = new EventEmitter();
  @Output() passwdOutput = new EventEmitter();

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
        user : this.fb.control(''),
        passwd: this.fb.control('')
    });
  }

  OnVerificar(){
    let userInput = this.loginForm.get('user')?.value;
    let passwdInput = this.loginForm.get('passwd')?.value
    this.userOutput.emit(userInput);
    this.passwdOutput.emit(passwdInput);
    this.exibe = true;
  }

}
