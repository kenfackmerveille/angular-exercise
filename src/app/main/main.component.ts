import { Component , OnInit } from '@angular/core';
import { UsersSessionService } from '../services/session/users-session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  part1: string = '';
  sdd:any = '';
  constructor(private  session : UsersSessionService ){}
    ngOnInit(): void {
      this.sdd = this.session.getsession();
      if(this.sdd){
        this.part1= this.sdd.nameInit;
      }
    }
  }
  

