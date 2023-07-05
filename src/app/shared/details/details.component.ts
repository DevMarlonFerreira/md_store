import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { Item } from '../../core/models/cart.model';
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

  @Input() item: any = {};
  constructor(private cartService: CartService) {}

  handlerCart() {
    this.cartService.handlerCart({productId: this.item.id, name: this.item.name, quantity: this.quantity});
  }
}
