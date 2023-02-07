import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMasterComponent } from './volunteer-master.component';

describe('VolunteerMasterComponent', () => {
  let component: VolunteerMasterComponent;
  let fixture: ComponentFixture<VolunteerMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
