import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Larssen } from './larssen/larssen';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Larssen, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('strandz');
}
