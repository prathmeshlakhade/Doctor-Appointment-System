import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  constructor() {
    this.redirectUser();
  }

  redirectUser() {
    const user = this.authService.getCurrentUser();

    if (user) {
      if (user.role === 'patient') {
        this.router.navigate(['/patient-dashboard']);
      } else if (user.role === 'doctor') {
        this.router.navigate(['/doctor-dashboard']);
      }
    } else {
      this.router.navigate(['/login']); // 🔹 Redirect to login if no user is found
    }
  }
}
