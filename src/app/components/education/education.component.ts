import { Component } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  institutionUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html'
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Bachelors in Computer Applications',
      institution: 'AmrapaliGroup of Institutes',
      institutionUrl: '#',
      startDate: '2022',
      endDate: '2025',
      achievements: [
        'Graduated with honors', 
        'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
      ]
    },
  ];
}