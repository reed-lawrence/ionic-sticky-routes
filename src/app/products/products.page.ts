import { Component, OnInit } from '@angular/core';
import { Product } from '../_shared/classes/product';
import { ProductService } from '../_shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: Product[] = [];

  getProducts() {
    this.productService.list().then(products => this.products = products);
  }

  ngOnInit() {
    console.log('ProductsPage initialized');
    this.getProducts();
  }

}
