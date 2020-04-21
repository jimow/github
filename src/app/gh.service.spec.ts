import { TestBed } from '@angular/core/testing';

import { GhService } from './gh.service';

describe('GhService', () => {
  let service: GhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
