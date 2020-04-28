import { Component, OnInit, Input } from '@angular/core';
import { MyProductsService } from '../shared/services/my-products.service';
import { ProductsService } from '../shared/http/products.service';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css'],
})
export class ProductElementComponent implements OnInit {
  @Input() product;

  constructor() {}

  async ngOnInit() {}
}
