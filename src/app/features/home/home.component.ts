import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentService } from '../../core/services/equipment.service';

import { ContainerComponent } from '../../shared/container/container.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { GridComponent } from '../../shared/grid/grid.component';

import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeroComponent, GridComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  equipments: Equipment[] = [];

  constructor(
    private readonly equipmentService: EquipmentService
  ) {}

  ngOnInit(): void {
    this.equipmentService
      .getAll()
      .subscribe((equipments: any) => {
        this.equipments = equipments;
      });
  }
}
