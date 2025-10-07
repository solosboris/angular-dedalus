import { TestBed } from '@angular/core/testing';

import { ApiAmountService } from './amount.service';

describe('AmountService', () => {
  let service: ApiAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
