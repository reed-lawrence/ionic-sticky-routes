import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/_shared/services/product.service';
import { Product } from 'src/app/_shared/classes/product';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {
    this.subs.push(this.productService.onChanges.subscribe(
      (e) => {
        if (e === 'update' && this.product.id) {
          this.GetProduct(this.product.id);
        }
      }
    ));
  }
  private subs: Subscription[] = [];

  product?: Product;

  async GetProduct(productId: number) {
    this.productService.get(productId).then(prod => {
      this.product = prod;
    });
  }

  async AddToCart(product: Product) {
    return new Promise<void>((resolve, reject) => {
      this.cartService.cart.products.push(product);
      resolve();
    });
  }

  ngOnInit() {
    console.log('ProductViewPage initialized');
    const urlId = this.route.snapshot.paramMap.get('productid');
    if (urlId) {
      const productId = parseInt(urlId, 10);
      this.GetProduct(productId);
    }
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
