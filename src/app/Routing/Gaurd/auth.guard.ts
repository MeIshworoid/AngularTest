import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if (typeof window !== 'undefined' && window.localStorage){
    const role = localStorage.getItem('role');

  if(role==='admin'){
    return true;
  }
  else{
    router.navigate(['/loginForm']);
    return false
  }
  }

  router.navigate(['/loginForm']);
    return false;
  
};
