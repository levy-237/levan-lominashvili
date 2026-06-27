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
      "A full-stack electric car marketplace built with a production-style architecture, advanced listing flows, authentication, search, and user-focused marketplace features.",
    "description-de":
      "Ein Full-Stack-Marktplatz für Elektroautos mit produktionsnaher Architektur, erweiterten Listing-Flows, Authentifizierung, Suche und nutzerorientierten Marktplatz-Features.",
    highlights: [
      "Built a complete listing system with advanced filtering, search params, detail pages, and seller/user flows.",
      "Implemented authentication with access and refresh tokens, protected routes, and secure session handling.",
      "Designed backend APIs with Django REST Framework, PostgreSQL models, permissions, serializers, and query optimization.",
      "Added product-level features such as favorites, reports, comparison, price history, chat, and cost calculation tools.",
    ],
    "highlights-de": [
      "Aufbau eines vollständigen Listing-Systems mit erweiterten Filtern, Suchparametern, Detailseiten sowie Verkäufer- und Nutzer-Flows.",
      "Implementierung von Authentifizierung mit Access- und Refresh-Tokens, geschützten Routen und sicherer Session-Verwaltung.",
      "Entwicklung von Backend-APIs mit Django REST Framework, PostgreSQL-Modellen, Berechtigungen, Serializern und Query-Optimierung.",
      "Produkt-Features wie Favoriten, Meldungen, Vergleich, Preisverlauf, Chat und Kostenrechner.",
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
      "Docker",
      "WebSockets",
    ],
    links: [
      {
        label: "Live Demo",
        "label-de": "Live-Demo",
        href: "https://carpoject-client.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/levy-237/CarProject",
      },
    ],
  },
];
