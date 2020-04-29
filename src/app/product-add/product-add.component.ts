import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestProductsService } from '../shared/services/test-products.service';
import { HttpProductService } from '../shared/services/http-product.service';
import { MyProduct } from '../shared/models/myproduct.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  @Output() addProduct = new EventEmitter<MyProduct>();

  constructor(
    private testProductService: TestProductsService,
    private httpProductService: HttpProductService
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });
  }

  async onAddProduct() {
    // this.testProductService.myProdycts.push(this.productForm.value);
    // try {
    //   await this.httpProductService.postProduct(this.productForm.value);
    // } catch (err) {
    //   console.error(err);
    // }
    this.addProduct.emit(this.productForm.value);
  }
}
