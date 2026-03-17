import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Project-Based Web Development Training',
      company: 'Vault of Codes (Remote)',
      companyUrl: '#',
      startDate: 'July 2025',
      endDate: 'July 2025',
      achievements: [
        'Completed intensive training focused on hands-on web development projects',
        'Worked on small tasks emphasizing UI structure, responsiveness, and modern development practices',
        'Gained practical experience with JavaScript, HTML5, CSS3, and Tailwind CSS',
        'Utilized Git and GitHub for version control and team collaboration',
        'Developed responsive web pages improving load performance and usability'
      ]
    },
    {
      position: 'AI for Beginners Certification',
      company: 'HP LIFE (HP Foundation)',
      companyUrl: '#',
      startDate: 'July 2025',
      endDate: 'July 2025',
      achievements: [
        'Completed certification program covering AI fundamentals and practical applications',
        'Learned about AI concepts and their implementation in modern development',
        'Gained knowledge of machine learning basics and API integration'
      ]
    },
    {
      position: 'JavaScript Fundamentals to Advanced: Full Stack Development',
      company: 'Online Training',
      companyUrl: '#',
      startDate: 'February 2026',
      endDate: 'February 2026',
      achievements: [
        'Comprehensive training covering JavaScript from fundamentals to advanced full-stack development',
        'Learned Node.js, Express.js, and REST API development',
        'Gained hands-on experience with modern web development technologies'
      ]
    }
  ];
}

