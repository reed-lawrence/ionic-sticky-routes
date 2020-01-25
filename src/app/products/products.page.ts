import { Component, OnInit } from '@angular/core';
import { Product, IProduct } from '../_shared/classes/product';
import { ProductService } from '../_shared/services/product.service';
import { ShoppingCartService } from '../shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(
    private productService: ProductService,
    public cartService: ShoppingCartService
  ) { }

  products: Product[] = [];

  getProducts() {
    this.productService.list().then(products => this.products = products);
  }

  async updateShoppingCart() {
    this.cartService.onChanges.next(this.cartService.cart);
  }

  ngOnInit() {
    console.log('ProductsPage initialized');
    this.getProducts();
  }

}
