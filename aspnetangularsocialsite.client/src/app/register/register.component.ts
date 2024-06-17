// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.email, this.password, this.confirmPassword).subscribe(
      response => {
        this.message = response.message;
      },
      error => {
        this.message = error.error.message || 'Registration failed.';
      }
    );
  }
}
