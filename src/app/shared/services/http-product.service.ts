import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/myproduct.model';

@Injectable({
  providedIn: 'root',
})
export class HttpProductService {
  routeApi = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postProduct(data: MyProduct) {
    return this.http.post(this.routeApi, data).toPromise();
  }
}
