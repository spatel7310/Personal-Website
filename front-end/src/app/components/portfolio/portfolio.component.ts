import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  images: string[] = [
    '../../../assets/img/code_builder.png',
    '../../../assets/img/phone_emulator.png',
    '../../../assets/img/soldby.jpeg',
    '../../../assets/img/phone_emulator.png',
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
    if (this.currentImageIndex === 0) {
      // Open the website in a new tab
      window.open('https://soldbysulay.herokuapp.com/', '_blank');
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}