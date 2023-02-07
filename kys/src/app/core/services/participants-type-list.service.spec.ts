import { TestBed } from '@angular/core/testing';

import { ParticipantsTypeListService } from './participants-type-list.service';

describe('ParticipantsTypeListService', () => {
  let service: ParticipantsTypeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantsTypeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
