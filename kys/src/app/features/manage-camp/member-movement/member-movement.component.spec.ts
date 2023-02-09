import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMovementComponent } from './member-movement.component';

describe('MemberMovementComponent', () => {
  let component: MemberMovementComponent;
  let fixture: ComponentFixture<MemberMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
