import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { IData } from 'src/app/interface/register.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersSessionService {

  constructor(private merveille: SessionStorageService) { }
  signUp(users: IData){
    const storeData = this.merveille.get("ange")
    let submit: Object[] = []
    if(storeData.status == true){
      submit = storeData.data
    }
    submit.push(users);
    this.merveille.set("ange", submit)
    
    alert("welcome you have signedUp congratulation")
  }

  signIn(users:IData){
    const register = this.merveille.get("ange");
    let logIn;
    for(const usersObject of register.data){
      if (users["email"] == usersObject["email"] && users["password"] == usersObject["password"]){
        users["username"] = usersObject["username"];
        this.merveille.set ("sdd", users)
        alert ('logIn succefully!!')
        return;
      }else{

        alert('sorry the information is not correct')
      }
    }
  }
  getsession(){
    let billy = this.merveille.get("sdd")
    
    if(billy.status){
      let someValue = {
        nameInit: billy.data("username")
      }
    }
  }
}
