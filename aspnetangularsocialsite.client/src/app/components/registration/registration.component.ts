import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  onSubmit(): void {
    this.userService.register(this.formData).subscribe(
      response => {
        console.log('Registration successful');
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
