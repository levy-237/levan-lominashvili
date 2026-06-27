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
    title: "Full Stack Engineer",
    "title-de": "Full-Stack-Entwickler",
    company: "Candidatis",
    employmentType: "Full-time",
    "employmentType-de": "Vollzeit",
    period: "Apr 2026 — Present",
    location: "Vienna, Austria",
    "location-de": "Wien, Österreich",
    description:
      "Working across frontend and backend features for production web platforms and internal business tools.",
    "description-de":
      "Arbeit an Frontend- und Backend-Features für produktive Webplattformen und interne Business-Tools.",
    highlights: [
      "Build full-stack features with React, Next.js, TypeScript, Django, and PostgreSQL.",
      "Work on API integrations, backend logic, forms, internal workflows, and user-facing interfaces.",
      "Improve existing systems with a focus on maintainability, usability, and reliable delivery.",
    ],
    "highlights-de": [
      "Entwicklung von Full-Stack-Features mit React, Next.js, TypeScript, Django und PostgreSQL.",
      "Arbeit an API-Integrationen, Backend-Logik, Formularen, internen Workflows und benutzerorientierten Interfaces.",
      "Verbesserung bestehender Systeme mit Fokus auf Wartbarkeit, Usability und zuverlässige Auslieferung.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Django",
      "DRF",
      "PostgreSQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Frontend Developer",
    "title-de": "Frontend-Entwickler",
    company: "Candidatis",
    employmentType: "Full-time",
    "employmentType-de": "Vollzeit",
    period: "Jan 2024 — Apr 2026",
    location: "Vienna, Austria",
    "location-de": "Wien, Österreich",
    description:
      "Built and improved user-facing interfaces, reusable components, listing pages, forms, and frontend flows for production platforms.",
    "description-de":
      "Entwicklung und Verbesserung benutzerorientierter Interfaces, wiederverwendbarer Komponenten, Listing-Seiten, Formulare und Frontend-Flows für produktive Plattformen.",
    highlights: [
      "Developed frontend features for job platforms and internal tools used in real business workflows.",
      "Created reusable components, filters, forms, and responsive user-facing pages.",
      "Worked in existing production codebases while balancing speed, clarity, and maintainability.",
    ],
    "highlights-de": [
      "Entwicklung von Frontend-Features für Jobplattformen und interne Tools in echten Business-Workflows.",
      "Erstellung wiederverwendbarer Komponenten, Filter, Formulare und responsiver Benutzeroberflächen.",
      "Arbeit in bestehenden produktiven Codebasen mit Balance aus Tempo, Klarheit und Wartbarkeit.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    "title-de": "Full-Stack-Entwickler (Praktikum)",
    company: "Georgia LTD",
    employmentType: "Internship",
    "employmentType-de": "Praktikum",
    period: "Nov 2022 — Oct 2023",
    location: "Tbilisi, Georgia",
    "location-de": "Tiflis, Georgien",
    description:
      "Gained practical full-stack development experience by working on frontend, backend, API, and database-related tasks.",
    "description-de":
      "Praktische Full-Stack-Erfahrung durch Arbeit an Frontend-, Backend-, API- und datenbankbezogenen Aufgaben.",
    highlights: [
      "Built and updated web application features using frontend and backend technologies.",
      "Worked with APIs, database-driven features, and user interface implementation.",
      "Improved fundamentals in full-stack development, Git workflows, debugging, and reading existing code.",
    ],
    "highlights-de": [
      "Entwicklung und Aktualisierung von Webanwendungs-Features mit Frontend- und Backend-Technologien.",
      "Arbeit mit APIs, datenbankgestützten Features und UI-Implementierung.",
      "Vertiefung der Grundlagen in Full-Stack-Entwicklung, Git-Workflows, Debugging und dem Lesen bestehenden Codes.",
    ],
    stack: [
      "JavaScript",
      "React",
      "Python",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Git",
    ],
  },
];
