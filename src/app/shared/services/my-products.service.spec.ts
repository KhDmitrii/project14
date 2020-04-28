import { TestBed } from '@angular/core/testing';

import { MyProductsService } from './my-products.service';

describe('MyProductsService', () => {
  let service: MyProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
