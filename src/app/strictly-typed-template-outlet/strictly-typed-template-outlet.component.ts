import { Component, TemplateRef } from '@angular/core';

export interface MyContext {
  $implicit: string;
}
@Component({
  selector: 'app-strictly-typed-template-outlet',
  templateUrl: './strictly-typed-template-outlet.component.html',
  styleUrls: ['./strictly-typed-template-outlet.component.scss'],
})
export class StrictlyTypedTemplateOutletComponent {
  myTemplateRef!: TemplateRef<MyContext>;
}
