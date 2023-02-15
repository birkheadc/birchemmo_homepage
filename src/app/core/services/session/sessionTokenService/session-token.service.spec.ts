import { TestBed } from '@angular/core/testing';

import { SessionTokenService } from './session-token.service';

describe('SessionTokenService', () => {
  let service: SessionTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
