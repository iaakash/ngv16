import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqInputComponent } from './req-input.component';

describe('ReqInputComponent', () => {
  let component: ReqInputComponent;
  let fixture: ComponentFixture<ReqInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqInputComponent]
    });
    fixture = TestBed.createComponent(ReqInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
