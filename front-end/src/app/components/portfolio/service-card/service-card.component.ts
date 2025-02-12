import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() paragraphs: string[] = [];

  // Define an array of colors to cycle through (excluding white)
  colors: string[] = ['aquamarine', 'blueviolet'];

  // Method to get the class based on word index
  getWordColorClass(index: number): string {
    // Return white color for every even-indexed word, otherwise cycle through other colors
    if ((index + 1) % 2 === 0) {
      return 'white';
    } else {
      // Adjust the index for cycling colors to skip white
      const adjustedIndex = Math.floor(index / 2);
      return this.colors[adjustedIndex % this.colors.length];
    }
  }
}
