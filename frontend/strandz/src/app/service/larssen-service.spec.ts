import { TestBed } from '@angular/core/testing';

import { LarssenService } from './larssen-service';

describe('LarssenService', () => {
  let service: LarssenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LarssenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
