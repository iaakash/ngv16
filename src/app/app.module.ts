import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReqInputHostComponent } from './req-input-host/req-input-host.component';
import { ReqInputComponent } from './req-input/req-input.component';
import { ProductComponent } from './product/product.component';
import { NoMoreSubscriptionComponent } from './no-more-subscription/no-more-subscription.component';
import { AutoUnsubscribeComponent } from './auto-unsubscribe/auto-unsubscribe.component';
import { AutoCleanDirective } from './directives/auto-clean.directive';
import { ClassBasedGuardComponent } from './class-based-guard/class-based-guard.component';
import { FunctionalGuardComponent } from './functional-guard/functional-guard.component';
import { LoginComponent } from './login/login.component';
import { StrictlyTypedTemplateOutletComponent } from './strictly-typed-template-outlet/strictly-typed-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    ReqInputHostComponent,
    ReqInputComponent,
    ProductComponent,
    NoMoreSubscriptionComponent,
    AutoUnsubscribeComponent,
    AutoCleanDirective,
    ClassBasedGuardComponent,
    FunctionalGuardComponent,
    LoginComponent,
    StrictlyTypedTemplateOutletComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
