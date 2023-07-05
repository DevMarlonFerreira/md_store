import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { EquipmentCartShow } from '../../core/models/equipment.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: EquipmentCartShow = {
    id: '',
    name: '',
    description: '',
    image: '',
    price: 0,
    isAvailable: false,
    rating: 0,
    quantity: 0
  };
  constructor(private router: Router) {}

  navigate(path: string, id: string) {
    const route = `${path}/${id}`;
    this.router.navigate([route], { queryParams: { id } });
  }
}
