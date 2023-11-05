import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogAddUserComponent} from "../dialog-add-user/dialog-add-user.component";
import {User} from "../../models/user.class";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  user = new User();

  allUsers: any[]= [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore, private userService: UserService) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({idField: 'customIdName'})
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });
  }
  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
