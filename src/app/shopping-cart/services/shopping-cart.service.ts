import { Injectable } from '@angular/core';
import { ShoppingCart } from '../classes/shopping-cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  public cart = new ShoppingCart();
  public onChanges = new Subject<ShoppingCart>();

}
