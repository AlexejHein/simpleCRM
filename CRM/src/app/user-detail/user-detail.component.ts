import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/user.class";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditAddressComponent} from "../dialog-edit-address/dialog-edit-address.component";
import {DialogEditUserComponent} from "../dialog-edit-user/dialog-edit-user.component";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  userId = '';
  user: User = new User;

  constructor(private route:ActivatedRoute,
              private firestore: AngularFirestore,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      this.userId = paramMap.get('id') || '';
      this.getUser();
    })
  }
  getUser(){
    this.firestore
      .collection('users')
      .doc(this.userId).get()
      .subscribe(doc =>{
        this.user = new User(doc.data());
    })
  }
  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent)
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent)
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
