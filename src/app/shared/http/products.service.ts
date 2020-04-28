import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseApi = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseApi + url;
  }

  public getProducts(url: string = ''): Promise<any> {
    return this.http.get(this.getUrl(url)).toPromise();
  }

  public postProduct(url: string = '', data): Promise<any> {
    return this.http.post(this.getUrl(url), data).toPromise();
  }
}
