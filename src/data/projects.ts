export type ProjectLink = {
  label: string;
  "label-de"?: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  slug: string;
  image: string;
  description: string;
  "description-de"?: string;
  highlights: string[];
  "highlights-de"?: string[];
  stack: string[];
  links: ProjectLink[];
};

export const projects: ProjectItem[] = [
  {
    title: "eAutoKauf",
    slug: "eautokauf",
    image: "eautokauf.png",
    description:
      "A full-stack electric vehicle marketplace with advanced search, URL-synced filters, authentication, listing management, saved searches, image uploads, and EV-specific vehicle data.",
    "description-de":
      "Ein Full-Stack-Marktplatz für Elektrofahrzeuge mit erweiterter Suche, URL-synchronisierten Filtern, Authentifizierung, Listing-Verwaltung, gespeicherten Suchen, Bild-Uploads und EV-spezifischen Fahrzeugdaten.",
    highlights: [
      "Built a full-stack EV marketplace with URL-synced advanced search, vehicle detail pages, favourites, side-by-side comparison, user dashboard, and listing creation/editing with validated forms.",
      "Designed EV-specific listing and backend flows with Django REST Framework, including JWT authentication, email verification, password recovery, saved searches with email notifications, ImageKit uploads, listing review states, price history, and structured vehicle data.",
      "Implemented production-style marketplace behavior with protected user workflows, ownership-based listing management, reusable frontend flows, API-driven data loading, and real-time features using WebSockets and Redis.",
    ],
    "highlights-de": [
      "Entwicklung eines Full-Stack-Marktplatzes für Elektrofahrzeuge mit URL-synchronisierter erweiterter Suche, Fahrzeugdetailseiten, Favoriten, direktem Vergleich, User-Dashboard sowie Listing-Erstellung und -Bearbeitung mit validierten Formularen.",
      "Entwicklung EV-spezifischer Listing- und Backend-Flows mit Django REST Framework, darunter JWT-Authentifizierung, E-Mail-Verifizierung, Passwort-Wiederherstellung, gespeicherte Suchen mit E-Mail-Benachrichtigungen, ImageKit-Uploads, Listing-Prüfstatus, Preisverlauf und strukturierte Fahrzeugdaten.",
      "Umsetzung produktionsnaher Marktplatz-Funktionalität mit geschützten User-Flows, besitzbasierter Listing-Verwaltung, wiederverwendbaren Frontend-Flows, API-basiertem Data Loading und Echtzeit-Features mit WebSockets und Redis.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "JWT",
      "ImageKit",
      "React Hook Form",
      "Zod",
      "Docker",
    ],
    links: [
      {
        label: "Live Demo",
        "label-de": "Live-Demo",
        href: "https://carpoject-client.vercel.app/",
      },
      {
        label: "Frontend GitHub",
        "label-de": "Frontend GitHub",
        href: "https://github.com/levy-237/carpoject-client",
      },
      {
        label: "Backend GitHub",
        "label-de": "Backend GitHub",
        href: "https://github.com/levy-237/CarProject",
      },
    ],
  },
];
