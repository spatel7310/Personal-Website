import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  cards = [
    {
      position: 'Software Engineer II',
      company: 'General Motors',
      description: 'Built scalable Springboot APIs, stood up a global REACT App, and maintained CI/CD pipelines.',
      yearsOfExperience: '3 years',
      icon: '../../../assets/img/gm_logo.png',
      experienceLink: 'https://www.gm.com/'
    },
    {
      position: 'SWE Intern',
      company: 'TechSmith Corp',
      description: 'Built the download feature for Knowmia, a screen capture software, and created a custom React component library.',
      yearsOfExperience: '3 months',
      icon: '../../../assets/img/knowmia_logo.png',
      experienceLink: 'https://www.techsmith.com/'
    },
    {
      position: 'Programming Intern',
      company: 'ServiceLane',
      description: 'Contributed to automation, performed code reviews, and wrote technical documentation.',
      yearsOfExperience: '1 year',
      icon: '../../../assets/img/eadvisor_logo.png',
      experienceLink: 'https://sleadvisor.com/'
    },
    {
      position: 'Frontend Developer',
      company: 'Urban Science',
      description: 'Capstone project, lead developer for an internal tool for the company.',
      yearsOfExperience: '4 months',
      icon: '../../../assets/img/US_logo.png',
      experienceLink: 'https://urbanscience.com/'
    },
    {
      position: 'App Developer',
      company: 'SP Software',
      description: 'Freelance developer making mobile apps, websites, and secure backends for clients.',
      yearsOfExperience: '1 year',
      icon: '../../../assets/img/dark_sp_logo.png',
      experienceLink: ''
    }
  ];

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
