import { TestBed } from '@angular/core/testing';
import { SessionService } from 'src/app/core/services/session/session.service';


describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
