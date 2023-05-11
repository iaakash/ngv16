import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ERole } from '../guards/functional-guard';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(status: boolean): Observable<boolean> {
    return of(status);
  }
  isRoleAllowed(role: ERole) {
    debugger;
    return role === ERole.Director ? of(true) : of(false);
  }
}
