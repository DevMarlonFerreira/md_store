import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];

  constructor() {}

  handlerCart(obj: Cart) {
    const result = this.cart.find((value) => value.productId === obj.productId);

    if (result) {
      result.quantity = obj.quantity;
    } else {
      this.cart.push(obj);
    }
  }

  get(): Cart[] {
    return this.cart;
  }

  destroy(): void {
    this.cart = [];
  }
}
