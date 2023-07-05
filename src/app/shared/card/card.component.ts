import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}
