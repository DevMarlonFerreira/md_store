import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() itens: any = [{}];
}
