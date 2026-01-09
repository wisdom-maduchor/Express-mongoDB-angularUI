import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard';
import { Login } from './login/login';
import { Larssen } from './larssen/larssen';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'larssen', component: Larssen, canActivate: [authGuard]}
];
