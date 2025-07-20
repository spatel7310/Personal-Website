import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/code_builder.png',
    'assets/img/soldby.jpeg',
    'assets/img/notely.png',
    'assets/img/resume_site.jpeg'
  ];
  currentImageIndex: number = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }

  onSlideClick(): void {
    const urls = [
      'https://github.com/spatel7310/Urban-Science-Code-Builder',
      'https://soldbysulay.herokuapp.com/',
      'https://github.com/spatel7310/Notely',
      'https://github.com/spatel7310/Personal-Website'
    ];
    window.open(urls[this.currentImageIndex], '_blank');
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}