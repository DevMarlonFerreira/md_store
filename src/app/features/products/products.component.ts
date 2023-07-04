import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil, tap, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { EquipmentService } from '../../core/services/equipment.service';
import { Equipment } from '../../core/models/equipment.model';
import { GridComponent } from '../../shared/grid/grid.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, GridComponent, ContainerComponent, FilterComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  equipments: Equipment[] = [];

  equipments$ = inject(EquipmentService)
    .getAll()
    .pipe(tap(() => (this.equipmentsLoaded = true)));
  equipmentsLoaded = false;
  destroy$ = new Subject<void>();

  constructor(private readonly equipmentService: EquipmentService) {}

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
