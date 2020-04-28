import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyProductsService } from '../shared/services/my-products.service';
import { MyFirstService } from '../shared/services/my-first.service';
import { ProductsService } from '../shared/http/products.service';

@Component({
  selector: 'app-product-interface',
  templateUrl: './product-interface.component.html',
  styleUrls: ['./product-interface.component.css'],
})
export class ProductInterfaceComponent implements OnInit {
  @Output() addProduct = new EventEmitter<any>();
  productName: string;

  constructor(
    private myProductsService: MyProductsService,
    private myFirstService: MyFirstService
  ) {}

  ngOnInit(): void {}

  async onAddProduct() {
    // this.myProductsService.addProduct(this.productName);
    // this.myFirstService.mySupserFunction(this.productName);
    let obj = { name: this.productName };
    this.addProduct.emit(obj);
  }
}
