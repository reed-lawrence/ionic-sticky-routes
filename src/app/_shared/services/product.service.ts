import { Injectable } from '@angular/core';
import { Product, IProduct } from '../classes/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /**
   * Simulates a backend API
   */
  // tslint:disable-next-line:variable-name
  private _products: IProduct[] = [
    {
      id: 1,
      name: 'Tomato Soup',
      category: 'Groceries',
      price: 199,
      description: 'A simple can of tomato soup. Goes great with grilled cheese.'
    },
    {
      id: 2,
      name: 'Claw Hammer',
      category: 'Hardware',
      price: 999,
      description: 'Perfect for all your home improvement projects.'
    },
    {
      id: 3,
      name: 'Remote Control Car',
      category: 'Toys & Games',
      price: 2999,
      description: 'Wirelessly drive the miniature car of your dreams!'
    }
  ];

  public onChanges = new Subject<'create' | 'update' | 'delete'>();


  public async get(id: number) {
    const product = this._products.find(p => p.id === id);
    if (product) {
      return new Product(product);
    } else {
      return undefined;
    }
  }

  public async list() {
    return this._products.map(p => new Product(p));
  }

  public async create(p: Product): Promise<number | undefined> {
    for (let i = 1; i <= this._products.length; i++) {
      if (this._products.findIndex(prod => prod.id === i) === -1) {
        const newProduct = new Product(p);
        newProduct.id = i;
        this._products.push(newProduct);
        this.onChanges.next('create');
        return i;
      }
    }
    return undefined;
  }

  public async update(p: Product) {
    for (const product of this._products) {
      if (product.id === p.id) {
        product.category = p.category;
        product.name = p.name;
        product.price = p.price;
        this.onChanges.next('update');
        return true;
      }
    }
    return false;
  }

  public async delete(p: Product) {
    const index = this._products.findIndex(product => product.id === p.id);
    if (index !== -1) {
      this._products.splice(index, 1);
      this.onChanges.next('delete');
      return true;
    }
    return false;
  }
}
