import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqInputHostComponent } from './req-input-host.component';

describe('ReqInputHostComponent', () => {
  let component: ReqInputHostComponent;
  let fixture: ComponentFixture<ReqInputHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqInputHostComponent]
    });
    fixture = TestBed.createComponent(ReqInputHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
