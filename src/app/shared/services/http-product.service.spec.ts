import { TestBed } from '@angular/core/testing';

import { HttpProductService } from './http-product.service';

describe('HttpProductService', () => {
  let service: HttpProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
