import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../shared/container/container.component";
import { HeaderComponent } from "../../shared/header/header.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
