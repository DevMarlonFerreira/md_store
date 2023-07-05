import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../core/services/cart.service';

import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  quantity: number = 1;

  show: boolean = false;

  @Input() item: Equipment = {
    id: '',
    name: '',
    description: '',
    image: '',
    price: 0,
    isAvailable: false,
    rating: 0
  };
  constructor(private cartService: CartService) {}

  handlerCart() {
    this.cartService.handlerCart({
      productId: this.item.id,
      name: this.item.name,
      quantity: this.quantity,
    });
    this.show = true;
  }
}
