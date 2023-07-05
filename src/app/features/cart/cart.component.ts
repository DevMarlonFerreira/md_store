import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridComponent } from '../../shared/grid/grid.component';

import { Cart } from '../../core/models/cart.model';
import { Equipment } from '../../core/models/equipment.model';

import { EquipmentService } from '../../core/services/equipment.service';
import { OrderService } from '../../core/services/order.service';

import { CartService } from '../../core/services/cart.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, GridComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [FilterPipe],
})
export class CartComponent {
  cart: Cart[] = [];
  equipments: Equipment[] = [];

  name: string = '';
  address: string = '';

  constructor(
    private equipmentService: EquipmentService,
    private orderService: OrderService,
    private cartService: CartService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.get();

    this.cart.map((item) => {
      const params = this.filterPipe.transform(item.name);
      this.equipmentService.getFilter(params).subscribe((equipments: any) => {
        this.equipments.push({ ...equipments[0], quantity: item.quantity });
      });
    });

    console.log(this.equipments);
  }

  purchase() {
    const order = {
      name: this.name,
      deliveryAddress: this.address,
      items: this.cart,
    };
    console.log(order);

    this.orderService.execute(order).subscribe((result: any) => {
      console.log(result)
    });
  }
}
