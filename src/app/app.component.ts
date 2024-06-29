import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { SignInWidgetComponent } from './sign-in-widget/sign-in-widget.component';
import { CardComponent } from './card/card.component';
import { ToolsComponent } from './tools/tools.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    SignInWidgetComponent, 
    CardComponent, 
    ToolsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rightmove-angular';
}
