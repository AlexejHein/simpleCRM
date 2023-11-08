import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSource = new BehaviorSubject<any[]>([]);
  currentUsers = this.usersSource.asObservable();

  constructor(private firestore: AngularFirestore) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.firestore.collection('users').valueChanges({idField: 'customIdName'})
      .subscribe((users: any[]) => {
        this.usersSource.next(users);
      });
  }

  // ...
}

