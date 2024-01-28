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

  tag = '#Лучшее рекламное Агентство';
  uniqueSellingProposition = 'ПРИВЛЕКИТЕ В СВОЙ БИЗНЕС КЛИЕНТОВ';
  subtitle =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id esse voluptates deleniti ipsam provident. Qui eum praesentium eos obcaecati tenetur aperiam odio temporibus soluta doloremque?';
}
