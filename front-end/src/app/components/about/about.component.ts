import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isSmallScreen: boolean = false;
  selectedCardIndex = 0;

  onRadioChange(index: number) {
    this.selectedCardIndex = index;
  }
  cards = [
    {
      position: 'Software Engineer II',
      company: 'General Motors',
      description: 'Built scalable Springboot APIs, stood up a global REACT App, and maintained CI/CD pipelines.',
      yearsOfExperience: '3 years',
      icon: '../../../assets/img/gm_logo.png',
      experienceLink: 'https://www.gm.com/',
      isChecked: false // Add isChecked property
    },
    {
      position: 'SWE Intern',
      company: 'TechSmith Corp',
      description: 'Built the download feature for Knowmia, a screen capture software, and created a custom React component library.',
      yearsOfExperience: '3 months',
      icon: '../../../assets/img/knowmia_logo.png',
      experienceLink: 'https://www.techsmith.com/',
      isChecked: false // Add isChecked property
    },
    {
      position: 'Programming Intern',
      company: 'ServiceLane',
      description: 'Contributed to automation, performed code reviews, and wrote technical documentation.',
      yearsOfExperience: '1 year',
      icon: '../../../assets/img/eadvisor_logo.png',
      experienceLink: 'https://sleadvisor.com/',
      isChecked: false // Add isChecked property
    },
    {
      position: 'Frontend Developer',
      company: 'Urban Science',
      description: 'Capstone project, lead developer for an internal tool for the company.',
      yearsOfExperience: '4 months',
      icon: '../../../assets/img/us_logo.png',
      experienceLink: 'https://urbanscience.com/',
      isChecked: false // Add isChecked property
    },
    {
      position: 'App Developer',
      company: 'SP Software',
      description: 'Freelance developer making mobile apps, websites, and secure backends for clients.',
      yearsOfExperience: '1 year',
      icon: '../../../assets/img/dark_sp_logo.png',
      experienceLink: '',
      isChecked: false // Add isChecked property
    }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 1024;
  }
}