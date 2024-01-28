import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  heroLargeImageUrl = 'assets/hero-large.png';
  heroMediumImageUrl = 'assets/hero.png';
  frameOneUrl = 'assets/frame1.png';
  frameTwoUrl = 'assets/frame2.png';
}
