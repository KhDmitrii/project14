import { Component, OnInit } from '@angular/core';
import { MyFirstService } from './shared/services/my-first.service';
import { TestProductsService } from './shared/services/test-products.service';
import { MyProduct } from './shared/models/myproduct.model';
import { HttpProductService } from './shared/services/http-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project14';

  products: MyProduct[];

  constructor(
    private myFirstService: MyFirstService,
    private testProductsService: TestProductsService,
    private httpProductService: HttpProductService
  ) {}

  ngOnInit() {
    // this.myFirstService.mySuperFunction('Hello');
    // this.products = this.testProductsService.myProdycts;
    // console.log(this.products);
    this.getData();
  }

  async getData() {
    try {
      this.products = await this.httpProductService.getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async onAddProduct(event: MyProduct) {
    try {
      await this.httpProductService.postProduct(event);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }
}
