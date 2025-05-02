import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isSmallScreen: boolean = false;
  cards = [
    {
      position: 'Software Engineer II',
      company: 'General Motors',
      description: 'Built scalable Springboot APIs, stood up a global REACT App, and maintained CI/CD pipelines.',
      yearsOfExperience: '3 years',
      icon: 'assets/icons/gm.png',
      experienceLink: 'https://www.gm.com/'
    },
    {
      position: 'App Developer',
      company: 'SP Software',
      description: 'Freelance developer making mobile apps, websites, and secure backends for clients.',
      yearsOfExperience: '1 year',
      icon: 'assets/icons/spsoftware.png',
      experienceLink: ''
    },
    {
      position: 'Frontend Developer',
      company: 'Urban Science',
      description: 'Capstone project, lead developer for an internal tool for the company.',
      yearsOfExperience: '4 months',
      icon: 'assets/icons/urbanscience.png',
      experienceLink: 'https://urbanscience.com/'
    },
    {
      position: 'Software Engineer Intern',
      company: 'TechSmith Corporation',
      description: 'Built the download feature for Knowmia, a screen capture software, and created a custom React component library.',
      yearsOfExperience: '3 months',
      icon: 'assets/icons/techsmith.png',
      experienceLink: 'https://www.techsmith.com/'
    },
    {
      position: 'Programming Intern',
      company: 'ServiceLane',
      description: 'Contributed to automation, performed code reviews, and wrote technical documentation.',
      yearsOfExperience: '1 year',
      icon: 'assets/icons/startup.png',
      experienceLink: 'https://sleadvisor.com/'
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