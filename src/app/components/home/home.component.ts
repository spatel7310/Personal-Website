import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private fullText: string = "there is nothing artificial about my intelligence. let's work together to transform ideas into exceptional software";
  public displayedText: string = "";
  private index: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.typeWriter();
  }

  private typeWriter(): void {
    const interval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.index);
        this.index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here
  }
}
