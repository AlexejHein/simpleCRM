import { Component } from '@angular/core';
import {User} from "../../models/user.class";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();


  saveUser(){
    console.log(this.user);
  }
}