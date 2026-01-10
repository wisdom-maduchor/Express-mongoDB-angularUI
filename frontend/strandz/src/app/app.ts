import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Larssen } from './larssen/larssen';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { Register } from './register/register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Register, Larssen, CommonModule, FormsModule, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('strandz');
}
