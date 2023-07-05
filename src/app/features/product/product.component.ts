import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { EquipmentService } from '../../core/services/equipment.service';

import { CardComponent } from '../../shared/card/card.component';
import { DetailsComponent } from '../../shared/details/details.component';

import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardComponent, DetailsComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  equipment: Equipment = {
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
    const id = this.route.snapshot.paramMap.get('slug');
    if (id)
      this.equipmentService.getDetail(id).subscribe((equipment: Equipment) => {
        this.equipment = equipment;
      });
  }
}
