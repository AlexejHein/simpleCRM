import { Component } from '@angular/core';
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  constructor(private firestore: AngularFirestore) { }




  saveUser(){
    console.log(this.user);

    this.firestore.collection('users').add(this.user.toJSON()).then(r => {
      console.log(r);
    });
  }
}
