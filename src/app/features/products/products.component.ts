import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { EquipmentService } from '../../core/services/equipment.service';
import { Equipment } from '../../core/models/equipment.model';
import { GridComponent } from '../../shared/grid/grid.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FilterComponent } from '../../shared/filter/filter.component';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GridComponent,
    ContainerComponent,
    FilterComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [FilterPipe],
})
export class ProductsComponent {
  equipments: Equipment[] = [];

  destroy$ = new Subject<void>();

  search?: string = '';
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  orderBy?: string = '';
  sort?: string = '';

  constructor(
    private readonly equipmentService: EquipmentService,
    private fb: FormBuilder,
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

    this.equipmentService.getFilter(params).subscribe((equipments: any) => {
      this.equipments = equipments;
    });
  }

  ngOnInit(): void {
    this.equipmentService.getAll().subscribe((equipments: any) => {
      this.equipments = equipments;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
