import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.authService.register({email: this.email, password: this.password})
    .subscribe(() => {
      this.router.navigate(['/larssen']);
    })
  };



}
