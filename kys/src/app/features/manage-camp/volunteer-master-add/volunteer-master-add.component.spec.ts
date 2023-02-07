import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerMasterAddComponent } from './volunteer-master-add.component';

describe('VolunteerMasterAddComponent', () => {
  let component: VolunteerMasterAddComponent;
  let fixture: ComponentFixture<VolunteerMasterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerMasterAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerMasterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
