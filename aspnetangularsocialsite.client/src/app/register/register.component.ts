import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  register() {
    const user = { email: this.email, password: this.password };
    this.authService.register(user).subscribe(response => {
      console.log('User registered:', response);
    });
  }
}
