import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/api/auth/register`, user);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
