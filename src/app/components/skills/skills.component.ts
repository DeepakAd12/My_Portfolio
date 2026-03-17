import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: 'Expert' | 'Intermediate' | 'Beginner';
  experience: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  `]
})
export class SkillsComponent {

  frontends = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 2 },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  backends = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/django/django-plain.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Django REST Framework', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/django/django-plain.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true, proficiency: 'Intermediate', experience: 2 },
    { name: 'RESTful APIs', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 }
  ];

  databases = [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/sqlite/sqlite-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Database Design', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 }
  ];

  opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vscode/vscode-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Command Line', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/linux/linux-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 }
  ];

}
