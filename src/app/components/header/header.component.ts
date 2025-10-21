import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navbarOpen = false;
  @Output() navigateToContact = new EventEmitter<string>();

  constructor() { }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  onRequestResume() {
    this.navigateToContact.emit('resume');
  }

  onHireMe() {
    this.navigateToContact.emit('hire');
  }
}
