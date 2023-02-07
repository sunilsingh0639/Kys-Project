import { TestBed } from '@angular/core/testing';

import { VolunteerMasterService } from './volunteer-master.service';

describe('VolunteerMasterService', () => {
  let service: VolunteerMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
