import { TestBed } from '@angular/core/testing';

import { UsercompletedserviceService } from './usercompletedservice.service';

describe('UsercompletedserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercompletedserviceService = TestBed.get(UsercompletedserviceService);
    expect(service).toBeTruthy();
  });
});
