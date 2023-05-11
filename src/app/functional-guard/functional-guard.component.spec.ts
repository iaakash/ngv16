import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalGuardComponent } from './functional-guard.component';

describe('FunctionalGuardComponent', () => {
  let component: FunctionalGuardComponent;
  let fixture: ComponentFixture<FunctionalGuardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalGuardComponent]
    });
    fixture = TestBed.createComponent(FunctionalGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
