import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampTypeComponent } from './camp-type.component';

describe('CampTypeComponent', () => {
  let component: CampTypeComponent;
  let fixture: ComponentFixture<CampTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
