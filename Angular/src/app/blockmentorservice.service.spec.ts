import { TestBed } from '@angular/core/testing';

import { BlockmentorserviceService } from './blockmentorservice.service';

describe('BlockmentorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockmentorserviceService = TestBed.get(BlockmentorserviceService);
    expect(service).toBeTruthy();
  });
});
