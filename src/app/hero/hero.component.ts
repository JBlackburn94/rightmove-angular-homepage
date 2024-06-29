import { Component } from '@angular/core';
import { HeroSearchContainerComponent } from '../hero-search-container/hero-search-container.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroSearchContainerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
