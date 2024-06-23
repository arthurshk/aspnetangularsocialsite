import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const user = {
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    this.authService.register(user).subscribe(
      response => {
        console.log(response.message);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
        this.errorMessage = error.error.message || 'Registration failed';
      }
    );
  }
}
