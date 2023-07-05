import { Injectable } from '@angular/core';
import { Cart, Item } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];
  item: Item = {
    productId: '',
    name: '',
    quantity: 0,
  };

  constructor() {}

  handlerCart(obj: Item) {
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
}
