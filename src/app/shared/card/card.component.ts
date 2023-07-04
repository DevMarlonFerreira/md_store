import { Component, Input, OnDestroy } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Equipment } from '../../core/models/equipment.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: any = {};
}
