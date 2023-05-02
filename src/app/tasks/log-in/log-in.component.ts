import { Component } from '@angular/core';
import { IData } from 'src/app/interface/register.interface';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private kenfi: UsersService){}

  users: IData={
    username: "",
    password:""
  }

  submit(){
    this.kenfi.signIn(this.users)
  }
}
