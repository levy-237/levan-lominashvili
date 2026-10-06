export type ExperienceItem = {
  title: string;
  "title-de"?: string;
  subtitle?: string;
  "subtitle-de"?: string;
  company: string;
  employmentType: string;
  "employmentType-de"?: string;
  period: string;
  location: string;
  "location-de"?: string;
  description: string;
  "description-de"?: string;
  highlights: string[];
  "highlights-de"?: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Developer",
    "title-de": "Softwareentwickler",
    subtitle: "Frontend → Full Stack Developer",
    "subtitle-de": "Frontend → Full Stack Developer",
    company: "Candidatis GmbH",
    employmentType: "Full-time",
    "employmentType-de": "Vollzeit",
    period: "Feb 2024 — Aug 2026",
    location: "Vienna, Austria",
    "location-de": "Wien, Österreich",
    description:
      "Progressed from frontend to full-stack development across production HR-tech applications, working with Next.js, React, TypeScript, GraphQL/REST APIs, and backend functionality in Python/Django.",
    "description-de":
      "Weiterentwicklung von Frontend- zu Full-Stack-Aufgaben an produktiven HR-Tech-Anwendungen mit Next.js, React, TypeScript, GraphQL-/REST-APIs sowie Backend-Funktionalitäten mit Python/Django.",
    highlights: [
      "Rebuilt legacy Bootstrap-based pages into production Next.js, React, TypeScript, and JavaScript applications for 10 branded job portals, including TECjobs.at, jusjobs.at, and medjobs.at.",
      "Built internal applications and workflows for sales and operations, including company/contact management, job review queues, booking, offers, invoices, and crawler administration.",
      "Integrated GraphQL and REST APIs, server-side data loading, authentication, and CRUD workflows, using Zod for form and payload validation across public and internal applications.",
      "Developed backend functionality with Python, Django, and Django REST Framework, including candidate accounts, email verification, password recovery, profile completeness, engagement tracking, and job-alert subscriptions.",
      "Contributed code to a Java-based job crawler and used Claude and Cursor IDE for implementation, debugging, and refactoring, with generated code manually reviewed, tested, and validated.",
    ],
    "highlights-de": [
      "Legacy-Seiten auf Bootstrap-Basis in produktive Anwendungen mit Next.js, React, TypeScript und JavaScript für 10 Jobportale umgebaut, darunter TECjobs.at, jusjobs.at und medjobs.at.",
      "Interne Anwendungen und Workflows für Vertrieb und Operations entwickelt, darunter Firmen-/Kontaktverwaltung, Job-Review-Queues, Buchungen, Angebote, Rechnungen und Crawler-Administration.",
      "GraphQL- und REST-APIs integriert sowie serverseitiges Data Loading, Authentifizierung und CRUD-Workflows umgesetzt; Zod für Formular- und Payload-Validierung in öffentlichen und internen Anwendungen eingesetzt.",
      "Backend-Funktionalitäten mit Python, Django und Django REST Framework entwickelt, darunter Kandidatenkonten, E-Mail-Verifizierung, Passwort-Wiederherstellung, Profilvollständigkeit, Engagement-Tracking und Job-Alert-Abonnements.",
      "Code zu einem Java-basierten Job-Crawler beigetragen sowie Claude und Cursor IDE für Implementierung, Debugging und Refactoring eingesetzt; generierten Code manuell geprüft, getestet und validiert.",
    ],
    stack: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "React",
      "Next.js",
      "Django",
      "DRF",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "Zod",
      "Tailwind CSS",
      "Material UI",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    "title-de": "Full-Stack-Entwickler (Praktikum)",
    company: "Gorgia Ltd",
    employmentType: "Internship",
    "employmentType-de": "Praktikum",
    period: "Apr 2023 — Oct 2023",
    location: "Tbilisi, Georgia",
    "location-de": "Tiflis, Georgien",
    description:
      "Full-stack development experience across React frontend work, Django backend integration, automated testing, and task-based development.",
    "description-de":
      "Full-Stack-Erfahrung mit React-Frontend-Entwicklung, Django-Backend-Integration, automatisierten Tests und taskbasierter Entwicklung.",
    highlights: [
      "Developed React frontend components and responsive UI sections, integrating them with backend data and existing application flows.",
      "Worked across frontend and backend tasks in a React and Django codebase, supporting feature implementation and application maintenance.",
      "Wrote automated frontend tests with React Testing Library and Django tests for backend views, models, and API functionality while working with Git and code reviews.",
    ],
    "highlights-de": [
      "React-Frontend-Komponenten und responsive UI-Bereiche entwickelt und mit Backend-Daten sowie bestehenden Anwendungsabläufen integriert.",
      "Frontend- und Backend-Aufgaben in einer React-/Django-Codebase übernommen und an Features sowie Wartung mitgearbeitet.",
      "Automatisierte Frontend-Tests mit React Testing Library sowie Django-Tests für Backend-Views, Models und APIs geschrieben und mit Git und Code Reviews gearbeitet.",
    ],
    stack: [
      "JavaScript",
      "Python",
      "React",
      "Django",
      "REST APIs",
      "React Testing Library",
      "Django Testing",
      "HTML",
      "CSS",
      "Git",
    ],
  },
];
