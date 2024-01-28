import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isWindowScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const threshold = 20;
    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPosition > threshold) {
      this.isWindowScrolled = true;
    } else {
      this.isWindowScrolled = false;
    }
  }
}
