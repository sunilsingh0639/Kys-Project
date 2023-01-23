import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberTypeComponent } from './subscriber-type.component';

describe('SubscriberTypeComponent', () => {
  let component: SubscriberTypeComponent;
  let fixture: ComponentFixture<SubscriberTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
