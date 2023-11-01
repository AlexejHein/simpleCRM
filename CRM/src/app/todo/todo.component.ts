import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { Todo } from "../../models/todo.class";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  todo = new Todo();

  todoId: string = '';

  allTodos: any[]= [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore.collection('todos').snapshotChanges().subscribe((changes: any) => {
      this.allTodos = changes.map((change: any) => {
        return {
          id: change.payload.doc.id,
          ...change.payload.doc.data()
        };
      });
    });
  }



  saveTodo(){
    this.firestore
      .collection('todos')
      .add(this.todo.toJSON())
      .then(r => {
        console.log('Todo saved successfully', r);
        this.resetTodo();
      })
      .catch(error => {
        console.error('Error saving todo:', error);
      });
  }
  deleteTodo(index: number) {
    if (index < 0 || index >= this.allTodos.length) {
      console.error('Invalid index');
      return;
    }
    const todoId = this.allTodos[index].id;

    this.firestore
      .collection('todos')
      .doc(todoId)
      .delete()
      .then(() => {
        console.log('Todo deleted successfully');
        this.allTodos.splice(index, 1);
        console.log(this.allTodos)
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  }



  private resetTodo() {
    this.todo = new Todo();
  }
}

