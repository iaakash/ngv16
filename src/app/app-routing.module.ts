import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
  mapToCanActivate,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { map } from 'rxjs';
import { AutoUnsubscribeComponent } from './auto-unsubscribe/auto-unsubscribe.component';
import { ClassBasedGuardComponent } from './class-based-guard/class-based-guard.component';
import { FunctionalGuardComponent } from './functional-guard/functional-guard.component';
import { AuthGuard } from './guards/class-based.guard';
import { ERole, permissionGuard } from './guards/functional-guard';
import { LoginComponent } from './login/login.component';
import { NoMoreSubscriptionComponent } from './no-more-subscription/no-more-subscription.component';
import { ProductComponent } from './product/product.component';
import { ReqInputHostComponent } from './req-input-host/req-input-host.component';
import { AuthService } from './services/auth.service';
import { ProductsResolverService } from './services/product-resolver.service';
import { StrictlyTypedTemplateOutletComponent } from './strictly-typed-template-outlet/strictly-typed-template-outlet.component';

const routes: Routes = [
  {
    path: 'req-input-demo',
    component: ReqInputHostComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    data: {
      anyStaticDataYouMightWantToPass: 'New Shiny Router',
    },
    resolve: {
      productData: ProductsResolverService,
    },
  },
  {
    path: 'auto-unsubscribe',
    component: AutoUnsubscribeComponent,
  },
  {
    path: 'take-until-destroyed',
    component: NoMoreSubscriptionComponent,
  },
  {
    path: 'old-classbased-guard',
    component: ClassBasedGuardComponent,
    canActivate: mapToCanActivate([AuthGuard]),
  },
  {
    path: 'functional-guard',
    component: FunctionalGuardComponent,
    // canActivate: [permissionGuard],
    // canActivate: [
    //   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //     const authService = inject(AuthService);
    //     const permission = ERole.Director;
    //     return authService
    //       .isRoleAllowed(permission)
    //       .pipe(
    //         map((isPermissible) =>
    //           isPermissible
    //             ? true
    //             : createUrlTreeFromSnapshot(route, ['/', 'login'])
    //         )
    //       );
    //   },
    // ],
  },
  {
    path: 'strict-template-outlet',
    component: StrictlyTypedTemplateOutletComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
