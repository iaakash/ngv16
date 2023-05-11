import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export enum ERole {
  'Director',
  'Accountant',
}

export const permissionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const permission = ERole.Director;
  //   const permission = ERole.Accountant;
  return authService
    .isRoleAllowed(permission)
    .pipe(
      map((isPermissible) =>
        isPermissible ? true : createUrlTreeFromSnapshot(route, ['/', 'login'])
      )
    );
};
