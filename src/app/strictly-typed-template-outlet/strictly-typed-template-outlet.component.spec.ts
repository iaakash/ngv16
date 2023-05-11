import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictlyTypedTemplateOutletComponent } from './strictly-typed-template-outlet.component';

describe('StrictlyTypedTemplateOutletComponent', () => {
  let component: StrictlyTypedTemplateOutletComponent;
  let fixture: ComponentFixture<StrictlyTypedTemplateOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrictlyTypedTemplateOutletComponent]
    });
    fixture = TestBed.createComponent(StrictlyTypedTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
