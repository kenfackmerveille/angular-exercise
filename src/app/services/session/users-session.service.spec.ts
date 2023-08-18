import { TestBed } from '@angular/core/testing';

import { UsersSessionService } from './users-session.service';

describe('UsersSessionService', () => {
  let service: UsersSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
