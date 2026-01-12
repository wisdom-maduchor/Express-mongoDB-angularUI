import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if(token && !authService.isTokenExpired()){
    return true;
  }

  authService.logout();
  router.navigate(['/login']); // redirects here when it can't find the token
  return false;
};
