import { Injectable } from '@angular/core';
import { LocalStoreService } from '../local-store.service';
import { IData } from 'src/app/interface/register.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private kenfack: LocalStoreService) { }
  signUp(users: IData){
    const storeData = this.kenfack.get("ange")
    let submit: Object[] = []
    if(storeData.status == true){
      submit = storeData.data
    }
    submit.push(users);
    this.kenfack.set("ange", submit)
    
    alert("welcome you have signedUp congratulation")
  }

  signIn(users:IData){
    const register = this.kenfack.get("ange")
    let logIn;
    for(const usersObject of register.data){
      if (users["username"] == usersObject["username"] && users["email"] == usersObject["email"] && users["password"] == usersObject["password"]){
        alert ('logIn succefully!!')
      }
      alert('sorry the information is not correct')
    }
  }

}
