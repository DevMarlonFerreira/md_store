import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { EquipmentService } from '../../core/services/equipment.service';
import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  equipments: Equipment = {
    id: '',
    name: '',
    description: '',
    image: '',
    price: 0,
    isAvailable: false,
    rating: 0,
  };

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
    private readonly equipmentService: EquipmentService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const aff = this.route.snapshot.params
    console.log(aff['slug']);
    this.equipmentService.getAll().subscribe((equipments: any) => {
      this.equipments = equipments;
    });
  }
}
