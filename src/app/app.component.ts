import { Component, OnInit } from '@angular/core';
import { MyFirstService } from './shared/services/my-first.service';
import { MyProductsService } from './shared/services/my-products.service';
import { ProductsService } from './shared/http/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project14';
  products = [];

  constructor(
    private myFirstService: MyFirstService,
    private myProductsService: MyProductsService,
    private productsService: ProductsService
  ) {}

  async ngOnInit() {
    this.myFirstService.mySupserFunction('hello');
    // this.products = this.myProductsService.products;
    this.updateData();
  }
  async updateData() {
    try {
      this.products = await this.productsService.getProducts('products');
    } catch (err) {
      console.error(err);
    }
  }

  async onAddProduct(obj) {
    try {
      await this.productsService.postProduct('products', obj);
    } catch (err) {
      console.error(err);
    } finally {
      this.updateData();
    }
  }
}
