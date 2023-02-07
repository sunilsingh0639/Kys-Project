import { TestBed } from '@angular/core/testing';

import { CampTypeListService } from './camp-type-list.service';

describe('CampTypeListService', () => {
  let service: CampTypeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampTypeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
