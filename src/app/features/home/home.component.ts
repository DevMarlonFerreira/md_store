import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { takeUntil, tap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../shared/container/container.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { GridComponent } from '../../shared/grid/grid.component';
import { EquipmentService } from '../../core/services/equipment.service';
import { Equipment } from '../../core/models/equipment.model';

import { StarwarsComponent } from '../../shared/starwars/starwars.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeroComponent, StarwarsComponent, GridComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  equipments: Equipment[] = [];

  equipments$ = inject(EquipmentService)
    .getAll()
    .pipe(tap(() => (this.equipmentsLoaded = true)));
  equipmentsLoaded = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly equipmentService: EquipmentService
  ) {}

  ngOnInit(): void {
    this.equipmentService
      .getAll()
      .subscribe((equipments: any) => {
        this.equipments = equipments;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
