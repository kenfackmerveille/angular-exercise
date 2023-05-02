import { Component } from '@angular/core';
import { IData } from 'src/app/interface/register.interface';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {

  constructor(private kenfi : UsersService){}

  users: IData={
    username: "",
    email: "",
    password:""
  }

  register(){
    this.kenfi.signUp(this.users)
  }
}
