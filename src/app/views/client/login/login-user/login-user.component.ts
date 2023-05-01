import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {

  user:string = ''
  pass:string = ''

  onKeyUser(val:any) : void {

    this.user = val
  }


  onKeyPass(val:any) : void {

    this.pass = val
  }

  logIn() :void {
      if(this.user == 'wathek' && this.pass == '123') {
        window.open('/userRec', '_blank');
      }

  }

}
