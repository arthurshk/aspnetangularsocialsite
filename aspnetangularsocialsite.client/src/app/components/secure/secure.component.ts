import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  template: `
    <div *ngIf="auth.isAuthenticated$ | async; else login">
      <p>Welcome, {{ (auth.user$ | async)?.name }}</p>
      <button (click)="logout()">Log Out</button>
    </div>
    <ng-template #login>
      <p>Please log in to access this page.</p>
      <button (click)="login()">Log In</button>
    </ng-template>
  `
})
export class SecureComponent {

  constructor(public auth: AuthService, private router: Router) { }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: window.location.origin });
  }

}
