import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  // const token = Preferences.get({ key: 'token' });
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
