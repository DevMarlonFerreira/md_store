import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup } from '@angular/forms';

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

  equipments$ = inject(EquipmentService)
    .getAll()
    .pipe(tap(() => (this.equipmentsLoaded = true)));
  equipmentsLoaded = false;
  destroy$ = new Subject<void>();

  public userForm: FormGroup;
  search?: string = '';
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  orderBy?: string = '';
  sort?: string = 'DESC';

  constructor(
    private readonly equipmentService: EquipmentService,
    private fb: FormBuilder,
    private filterPipe: FilterPipe
  ) {
    this.userForm = this.fb.group({
      first_name: '',
    });
  }

  filter() {
    const params = this.filterPipe.transform(
      this.search,
      this.minRating,
      this.maxRating,
      this.minPrice,
      this.maxPrice,
      this.isAvailable,
      this.orderBy,
    );
    console.log(params);

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

  setValue() {
    console.log(this.userForm.get('search')?.value);
    this.search = this.userForm.get('search')?.value;
    this.minRating = this.userForm.get('minRating')?.value;
    this.maxRating = this.userForm.get('maxRating')?.value;
    this.minPrice = this.userForm.get('minPrice')?.value;
    this.maxPrice = this.userForm.get('maxPrice')?.value;
    this.isAvailable = this.userForm.get('isAvailable')?.value;
    this.orderBy = this.userForm.get('orderBy')?.value;
    this.sort = this.userForm.get('sort')?.value;
  }
}
