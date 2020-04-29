import { TestBed } from '@angular/core/testing';

import { TestProductsService } from './test-products.service';

describe('TestProductsService', () => {
  let service: TestProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
