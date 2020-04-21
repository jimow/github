import { TestBed } from '@angular/core/testing';

import { GitserveService } from './gitserve.service';

describe('GitserveService', () => {
  let service: GitserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
