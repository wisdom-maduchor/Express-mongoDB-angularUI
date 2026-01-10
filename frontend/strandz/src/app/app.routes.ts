import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard';
import { Login } from './login/login';
import { Larssen } from './larssen/larssen';
import { Register } from './register/register/register';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'register', component: Register},
    {path: 'login', component: Login},
    {path: 'larssen', component: Larssen, canActivate: [authGuard]}
];
