import { Component } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroSearchComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
