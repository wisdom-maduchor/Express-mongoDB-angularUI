import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(
     private authService : AuthService,
     private router: Router
    ){};

  login() {
    this.authService.login({
      email: this.email, 
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/items']);
      },
      error: () => {
        this.error = 'invalid email or password';
      }
    });
  }
}
