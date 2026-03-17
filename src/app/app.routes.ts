import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'Deepak Adhikari - Full-Stack Developer specializing in Angular, .NET, and modern web technologies. Explore my portfolio, experience, and projects.',
      keywords: 'Deepak Adhikari, Full-Stack Developer, Angular Developer, .NET Developer, Portfolio, Web Development'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Deepak Adhikari, a passionate Full-Stack Developer with expertise in Angular, .NET, and modern web technologies.',
      keywords: 'About Deepak Adhikari, Full-Stack Developer Background, Angular Developer Profile, .NET Developer Experience'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore Deepak Adhikari\'s professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements.',
      keywords: 'Deepak Adhikari Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills'
    }
  },
  {
    path: 'education',
    component: EducationComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Education',
      description: 'Explore Deepak Adhikari\'s educational background and academic achievements. View degrees, certifications, and relevant coursework in computer science and web development.',
      keywords: 'Deepak Adhikari Education, Computer Science Degree, Web Development Education, Academic Background, Technical Certifications'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore Deepak Adhikaririri\'s portfolio of innovative web applications and software projects. View detailed case studies of Angular, .NET, and full-stack development work.',
      keywords: 'Deepak Adhikariririri Projects, Full-Stack Developer Portfolio, Angular Projects, .NET Applications, Web Development Portfolio'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with Deepak Adhikaririririri for collaboration opportunities, project inquiries, or professional discussions.',
      keywords: 'Contact Deepak Adhikariririririririri, Hire Full-Stack Developer, Angular Developer Contact, .NET Developer Hire, Web Development Services'
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Deepak Adhikaririririririririririririririririririririririri\'s professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer.',
      keywords: 'Deepak Adhikaririririririririririririririririririririririririririririri Resume, Full-Stack Developer CV, Angular Developer Resume, .NET Developer CV, Web Developer Resume Download'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
