import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EquipmentService } from '../../core/services/equipment.service';
import { FilterPipe } from '../../pipes/filter.pipe';

import { GridComponent } from '../../shared/grid/grid.component';
import { ContainerComponent } from '../../shared/container/container.component';

import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GridComponent,
    ContainerComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [FilterPipe],
})
export class ProductsComponent {
  equipments: Equipment[] = [];

  // FILTRO
  search?: string = '';
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  orderBy?: string = '';
  sort?: string = '';

  ngOnInit(): void {
    this.equipmentService.getAll().subscribe((equipments) => {
      this.equipments = equipments;
    });
  }

  constructor(
    private readonly equipmentService: EquipmentService,
    private filterPipe: FilterPipe
  ) {}

  filter() {
    const params = this.filterPipe.transform(
      this.search,
      this.minRating,
      this.maxRating,
      this.minPrice,
      this.maxPrice,
      this.isAvailable,
      this.orderBy,
      this.sort
    );

    this.equipmentService.getFilter(params).subscribe((equipments) => {
      this.equipments = equipments;
    });
  }
}
