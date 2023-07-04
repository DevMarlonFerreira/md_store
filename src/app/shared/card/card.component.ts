import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Equipment } from '../../core/models/equipment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: any = {};
  constructor(private router: Router) {}

  navigate(path: string, id: number) {
    const route = `${path}/${id}`;
    this.router.navigate([route], { queryParams: { id } });
  }

  // setListTo(type: string = "", filters: Object = {}): void {
  //   if (type === "feed" && !this.isAuthenticated) {
  //     void this.router.navigate(["/login"]);
  //     return;
  //   }

  //   // Otherwise, set the list object
  //   this.listConfig = { type: type, filters: filters };
  // }
}
