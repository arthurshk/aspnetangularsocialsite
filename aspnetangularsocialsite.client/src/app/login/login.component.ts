import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = error.error.message || 'Login failed';
      }
    );
  }
}
