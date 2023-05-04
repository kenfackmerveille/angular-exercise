import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from 'src/app/interface/register.interface';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private kenfi: UsersService, private route:Router){}

  users: IData={
    email: "",
    password:""
  }

  submit(){
    this.kenfi.signIn(this.users);
    this.route.navigate(["/send/main"]);
  }
}
