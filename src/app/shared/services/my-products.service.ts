import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyProductsService {
  products = [
    {
      name: 'Помидоры',
    },
    {
      name: 'Огурцы',
    },
  ];
  constructor() {}

  addProduct(str: string) {
    this.products.push({
      name: str,
    });
  }
}
