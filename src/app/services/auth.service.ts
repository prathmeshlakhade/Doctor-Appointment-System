import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/api/login'; // 🔹 Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        if (response && response.user) {
          localStorage.setItem('user', JSON.stringify(response.user)); // 🔹 Store user details
          localStorage.setItem('token', response.token); // 🔹 Store token if needed
        }
      })
    );
  }

  getCurrentUser() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

