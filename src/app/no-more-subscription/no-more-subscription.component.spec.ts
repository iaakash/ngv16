import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMoreSubscriptionComponent } from './no-more-subscription.component';

describe('NoMoreSubscriptionComponent', () => {
  let component: NoMoreSubscriptionComponent;
  let fixture: ComponentFixture<NoMoreSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoMoreSubscriptionComponent]
    });
    fixture = TestBed.createComponent(NoMoreSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
