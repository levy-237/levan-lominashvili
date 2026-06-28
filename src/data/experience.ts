export type ExperienceItem = {
  title: string;
  "title-de"?: string;
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
    title: "Full Stack Developer",
    "title-de": "Full-Stack-Entwickler",
    company: "Candidatis GmbH",
    employmentType: "Full-time",
    "employmentType-de": "Vollzeit",
    period: "Apr 2026 — Present",
    location: "Vienna, Austria",
    "location-de": "Wien, Österreich",
    description:
      "Full-stack development on production HR-tech applications, working across Next.js frontend flows, GraphQL/REST API integrations, and Django backend features.",
    "description-de":
      "Full-Stack-Entwicklung an produktiven HR-Tech-Anwendungen mit Next.js-Frontend-Flows, GraphQL/REST-API-Integrationen und Django-Backend-Features.",
    highlights: [
      "Connected frontend flows to GraphQL/REST APIs with server-side data loading, validated form submissions, protected sessions, and CRUD operations across public and internal applications.",
      "Implemented backend support in Django/DRF for candidate accounts, email verification, password recovery, profile completeness, job engagement tracking, and job alert subscriptions.",
      "Worked on production features used across public job portals and internal business tools.",
    ],
    "highlights-de": [
      "Anbindung von Frontend-Flows an GraphQL/REST-APIs mit serverseitigem Data Loading, validierten Formularen, geschützten Sessions und CRUD-Operationen in öffentlichen und internen Anwendungen.",
      "Implementierung von Backend-Features in Django/DRF für Kandidatenkonten, E-Mail-Verifizierung, Passwort-Wiederherstellung, Profilvollständigkeit, Job-Interaktionen und Job-Abos.",
      "Arbeit an produktiven Features für öffentliche Jobportale und interne Business-Tools.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "DRF",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    title: "Frontend Developer",
    "title-de": "Frontend-Entwickler",
    company: "Candidatis GmbH",
    employmentType: "Full-time",
    "employmentType-de": "Vollzeit",
    period: "Jan 2024 — Apr 2026",
    location: "Vienna, Austria",
    "location-de": "Wien, Österreich",
    description:
      "Frontend development for production job portals and internal admin tools, focused on modernizing older Bootstrap-based pages into maintainable Next.js/React applications.",
    "description-de":
      "Frontend-Entwicklung für produktive Jobportale und interne Admin-Tools mit Fokus auf die Modernisierung älterer Bootstrap-Seiten zu wartbaren Next.js/React-Anwendungen.",
    highlights: [
      "Rebuilt older Bootstrap-based pages into production Next.js/React applications for 10 branded job portals, including TECjobs.at, jusjobs.at, and medjobs.at with responsive, portal-specific UI.",
      "Built internal admin workflows used by sales and operations teams, including company/contact management, job review queues, offer and invoice screens, booking handling, and crawler administration.",
      "Developed responsive interfaces, reusable UI patterns, forms, filters, and business-facing frontend flows.",
    ],
    "highlights-de": [
      "Umbau älterer Bootstrap-basierter Seiten zu produktiven Next.js/React-Anwendungen für 10 gebrandete Jobportale, darunter TECjobs.at, jusjobs.at und medjobs.at, mit responsiver, portalspezifischer UI.",
      "Entwicklung interner Admin-Workflows für Sales- und Operations-Teams, darunter Firmen-/Kontaktverwaltung, Job-Review-Queues, Angebots- und Rechnungsansichten, Buchungsverwaltung und Crawler-Administration.",
      "Entwicklung responsiver Interfaces, wiederverwendbarer UI-Patterns, Formulare, Filter und businessorientierter Frontend-Flows.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "REST APIs",
      "Tailwind CSS",
      "Material UI",
      "Sass",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    "title-de": "Full-Stack-Entwickler Praktikant",
    company: "Georgia Ltd",
    employmentType: "Internship",
    "employmentType-de": "Praktikum",
    period: "Nov 2022 — Oct 2023",
    location: "Tbilisi, Georgia",
    "location-de": "Tiflis, Georgien",
    description:
      "Gained practical full-stack development experience by supporting frontend implementation, backend integration, testing, and task-based development.",
    "description-de":
      "Praktische Full-Stack-Erfahrung durch Unterstützung bei Frontend-Implementierung, Backend-Integration, Testing und taskbasierter Entwicklung.",
    highlights: [
      "Supported frontend development by implementing UI sections, improving responsive layouts, and integrating components with backend data.",
      "Tested React components with React Testing Library, covering form behavior, user interactions, and rendered UI states.",
      "Wrote Django tests for backend views, models, and API functionality while working with Git, code reviews, and task-based development.",
    ],
    "highlights-de": [
      "Unterstützung der Frontend-Entwicklung durch Implementierung von UI-Sektionen, Verbesserung responsiver Layouts und Integration von Komponenten mit Backend-Daten.",
      "Testen von React-Komponenten mit React Testing Library, darunter Formularverhalten, Benutzerinteraktionen und gerenderte UI-Zustände.",
      "Schreiben von Django-Tests für Backend-Views, Models und API-Funktionalität während der Arbeit mit Git, Code Reviews und taskbasierter Entwicklung.",
    ],
    stack: [
      "JavaScript",
      "React",
      "Python",
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
