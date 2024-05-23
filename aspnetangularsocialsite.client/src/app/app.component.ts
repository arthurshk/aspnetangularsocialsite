import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Social Networking Site';

  onUserCreated(user: User): void {
    console.log('User created:', user);
  }
}
