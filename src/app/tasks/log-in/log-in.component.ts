import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule, private route:Router) {
  }

  signin(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((respond: any) => {
        console.log(respond.user);
        alert('welcome' + respond.user)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  submit(){
    this.route.navigate(["send/main"]);
  }
}
