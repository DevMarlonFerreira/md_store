import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cart } from '../../core/models/cart.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.get();

    console.log(this.cart)
  }
}
