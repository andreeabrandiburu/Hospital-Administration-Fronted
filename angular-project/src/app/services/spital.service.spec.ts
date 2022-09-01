import { TestBed } from '@angular/core/testing';

import { SpitalService } from './spital.service';

describe('SpitalService', () => {
  let service: SpitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
