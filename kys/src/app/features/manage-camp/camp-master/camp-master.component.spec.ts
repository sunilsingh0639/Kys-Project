import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampMasterComponent } from './camp-master.component';

describe('CampMasterComponent', () => {
  let component: CampMasterComponent;
  let fixture: ComponentFixture<CampMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
