import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000';
  private http = inject(HttpClient);

  login(credentials: {email: string, password: string}){
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, credentials)
  };

  register(data: {email: string, password: string}){
    return this.http.post<{message: string}>(`${this.apiUrl}/register`, data);
  };
  
  saveToken(token: string) {
    localStorage.setItem('token', token);
  };

  getToken(){
    return localStorage.getItem('token');
  };

  logout(){
    localStorage.removeItem('token');
  };
}
