import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsTypeComponent } from './participants-type.component';

describe('ParticipantsTypeComponent', () => {
  let component: ParticipantsTypeComponent;
  let fixture: ComponentFixture<ParticipantsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
