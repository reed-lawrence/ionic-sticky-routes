import { Product } from 'src/app/_shared/classes/product';

export interface IShoppingCart {
  products: Product[];
  total: number;
}

export class ShoppingCart implements IShoppingCart {
  products: Product[] = [];
  total = 0;

  constructor(init?: Partial<IShoppingCart>) {
    if (init) {

      if (init.products) {
        this.products = init.products.map(p => new Product(p));
      }

      if (init.total && typeof init.total === 'number') {
        this.total = init.total;
      }

    }
  }
}
