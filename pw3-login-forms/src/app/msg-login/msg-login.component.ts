import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-login',
  imports: [],
  templateUrl: './msg-login.component.html',
  styleUrl: './msg-login.component.css'
})
export class MsgLoginComponent {
  @Input() exibeMsg = true;
  @Input() exibeDiv = false;
  @Input() userName : string = "";
}
