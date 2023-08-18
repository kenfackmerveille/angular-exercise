import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule) {
    // this.getData()
   }
  addData(value: any) {
    const addTaks = collection(this.firestore, 'Task');
    addDoc(addTaks, value)
    .then((respond) => {
     alert("Data saved");
     // console.log(respond);    
    })
    .catch((err) =>{
     alert("Opps Something Happened, Couldn't save")
     alert(err.message)
     console.log(err);
     
    })
   }
  
}
