import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) {
    this.isLoggedIn$ = afAuth.authState.pipe(map(user => !!user));
  }
}

