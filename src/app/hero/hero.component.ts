import { Component } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { SignInBannerComponent } from '../sign-in-banner/sign-in-banner.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroSearchComponent, SignInBannerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
