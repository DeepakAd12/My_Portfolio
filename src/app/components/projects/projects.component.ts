import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Study Helper - Full Stack AI Web App',
      description: [
        'Built an AI-powered web application that generates simplified explanations and bullet-point summaries for educational content.',
        'Integrated Google Gemini API for real-time AI-generated educational content and explanations.',
        'Implemented RESTful APIs using Node.js and Express for backend functionality.',
        'Deployed frontend on Netlify and backend on Render for production hosting.'
      ],
      techStack: ['JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML5', 'CSS3', 'Google Gemini API'],
      image: '/assets/docu-query-ai.webp',
      liveLink: 'https://lustrous-puppy-1e77a6.netlify.app/',
      githubLink: 'https://github.com/DeepakAd12/Ai--Study-Helper'
    },
    {
      title: 'Scalable Job Portal Backend (Django REST + PostgreSQL)',
      description: [
        'Built and deployed a production-ready REST API for a role-based job portal supporting both Recruiters and Job Seekers.',
        'Implemented JWT authentication and secure endpoints for user management and job workflows.',
        'Integrated PostgreSQL with environment-based configuration for robust data management.',
        'Deployed on Render using Gunicorn with live Swagger documentation for API testing.'
      ],
      techStack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Gunicorn', 'Render', 'Swagger'],
      image: '/assets/docum-query-ai.webp',
      liveLink: 'https://jobportal-backend-i26p.onrender.com/swagger/',
      githubLink: 'https://github.com/DeepakAd12/jobportal-pro'
    },
    {
      title: 'Django Authentication API',
      description: [
        'Developed a secure RESTful Authentication API using Django REST Framework.',
        'Implemented user registration, login, profile management, password change, and password reset via email.',
        'Used token-based authentication to protect user endpoints and ensure secure access.',
        'Tested all API endpoints using Postman and documented them with a comprehensive Postman collection.'
      ],
      techStack: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'Postman', 'JWT'],
      image: '/assets/auth-api.webp',
      githubLink: 'https://github.com/DeepakAd12/myproject'
    }
  ];
}
