import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared//button/button.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() item: any = {};

}
