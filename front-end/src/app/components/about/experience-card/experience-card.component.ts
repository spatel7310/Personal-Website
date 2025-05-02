import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() position!: string;
  @Input() company!: string;
  @Input() yearsOfExperience!: string;
  @Input() description!: string;
  @Input() icon!: string; // Path to the company icon
  @Input() experienceLink!: string; // Link to the experience details
  @Input() backgroundColor: string = '#fff'; // Background color for the card
  @Input() isChecked: boolean = false; // Indicates if the card is in the checked position
}