import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  data: { id: string; }[] | undefined;
  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule) {
    this.getData()
  }
  getData() {
    const addData = collection(this.firestore, 'Task');
    getDocs(addData)
    .then((respond) => {
      alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    })
  }
}
