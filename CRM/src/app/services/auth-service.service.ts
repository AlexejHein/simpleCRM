import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(email: string | undefined, password: string | undefined): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email ?? '', password ?? '');
      await this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    await this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}

