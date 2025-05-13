import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MsgLoginComponent } from "./msg-login/msg-login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, MsgLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user : string = "Gabriela";
  passwd : string = "gb123$";
  userVerificacao : string = "";
  passwdVerificacao : string = "";
  tipoMsg : boolean = false;
  exibeDiv: boolean = false;

  verificarUser(userInput: string){
    this.userVerificacao = userInput;
    if(this.userVerificacao == this.user){
      this.tipoMsg = true;
    }else{
      this.tipoMsg = false;
    }
  }

  verificarSenha(passwdInput: string){
    if(this.tipoMsg == true){
      this.passwdVerificacao = passwdInput;
      if(this.passwdVerificacao != this.passwd){
        this.tipoMsg = false;
      }
    }
    this.exibeDiv = true;
  }
}
