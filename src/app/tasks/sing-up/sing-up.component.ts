import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {

  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule) {
  }
 signup(value: any){
   createUserWithEmailAndPassword(this.auth, value.email, value.password )
   .then((respond: any) =>{
      console.log(respond.user);
      alert('Successfully Registered')
     })
      .catch((err) => {
       alert(err.message)       
   })
 }
}
