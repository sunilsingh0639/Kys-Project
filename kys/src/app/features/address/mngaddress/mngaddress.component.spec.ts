import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngaddressComponent } from './mngaddress.component';

describe('MngaddressComponent', () => {
  let component: MngaddressComponent;
  let fixture: ComponentFixture<MngaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MngaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
