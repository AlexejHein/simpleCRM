import { Component } from '@angular/core';
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }




  saveUser(){
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then(r => {
        this.loading = false;
      console.log(r);
    });
    this.dialogRef.close();
  }



  protected readonly close = close;
}
