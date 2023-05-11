import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBasedGuardComponent } from './class-based-guard.component';

describe('ClassBasedGuardComponent', () => {
  let component: ClassBasedGuardComponent;
  let fixture: ComponentFixture<ClassBasedGuardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassBasedGuardComponent]
    });
    fixture = TestBed.createComponent(ClassBasedGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
