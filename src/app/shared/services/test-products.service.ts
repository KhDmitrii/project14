import { Injectable } from '@angular/core';
import { MyProduct } from '../models/myproduct.model';

@Injectable({
  providedIn: 'root',
})
export class TestProductsService {

  myProdycts: MyProduct[] = [{ name: 'Яблоки', price: 100 }];

  constructor() {}
}
