import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | '' | undefined;
  password: string | '' | undefined;

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.email, this.password).then(r => console.log(r));
  }
}
