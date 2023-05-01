import { Component, Output, } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  user:string = ''
  pass:string = ''

  onKeyUser(val:any) : void {

    this.user = val
  }


  onKeyPass(val:any) : void {

    this.pass = val
  }

  logIn() :void {
      if(this.user == 'admin' && this.pass == 'admin') {
        window.open('/dashboard', '_blank');
      }

  }



}
