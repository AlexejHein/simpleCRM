import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosSource = new BehaviorSubject<any[]>([]);
  currentTodos = this.todosSource.asObservable();

  constructor(private firestore: AngularFirestore) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.firestore.collection('todos').valueChanges({idField: 'customIdName'})
      .subscribe((todos: any[]) => {
        this.todosSource.next(todos);
      });
  }

  // ...
}


