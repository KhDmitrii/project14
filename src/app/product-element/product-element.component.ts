import { Component, OnInit, Input } from '@angular/core';
import { MyProduct } from '../shared/models/myproduct.model';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css'],
})
export class ProductElementComponent implements OnInit {
  @Input() product: MyProduct;

  constructor() {}

  ngOnInit(): void {}
}
