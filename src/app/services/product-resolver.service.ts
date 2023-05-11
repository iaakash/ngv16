import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverService implements Resolve<any> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return of({ id: 34, name: 'MacBookPro', price: 'INR 420000' });
  }
}
