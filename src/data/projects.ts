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
    title: "Flight Operations Dashboard",
    slug: "flight-operations-dashboard",
    image: "flighttracker.png",
    description:
      "A real-time flight-tracking platform with a Docker-containerized Java 23 / Spring Boot backend, live ADS-B data ingestion, REST APIs, persistence, WebSocket broadcasting, and a React map frontend.",
    "description-de":
      "Eine Echtzeit-Flugtracking-Plattform mit Docker-containerisiertem Java-23-/Spring-Boot-Backend, Live-ADS-B-Daten, REST-APIs, Persistenz, WebSocket-Broadcasting und React-Kartenfrontend.",
    highlights: [
      "Built and deployed a Java 23 / Spring Boot backend that ingests live ADS-B data, persists flights and aircraft, and exposes REST APIs for flights, aircraft, and live positions.",
      "Implemented real-time WebSocket broadcasting for connected clients and a nightly scheduled cleanup job to keep persisted operational data limited to current flight activity.",
      "Built a live React map frontend consuming real-time WebSocket updates, using Codex for AI-assisted implementation, debugging, and refactoring with manual code review, testing, and validation.",
    ],
    "highlights-de": [
      "Java-23-/Spring-Boot-Backend entwickelt und deployed, das Live-ADS-B-Daten verarbeitet, Flüge und Flugzeuge persistiert und REST-APIs für Flüge, Flugzeuge und Positionen bereitstellt.",
      "Echtzeit-WebSocket-Broadcasting für verbundene Clients sowie einen nächtlichen Cleanup-Job implementiert, um persistierte Betriebsdaten aktuell zu halten.",
      "Live-Kartenfrontend mit React entwickelt, das Echtzeit-WebSocket-Updates verarbeitet; Codex für KI-gestützte Implementierung, Debugging und Refactoring mit manueller Code-Prüfung, Testing und Validierung eingesetzt.",
    ],
    stack: [
      "Java",
      "TypeScript",
      "Spring Boot",
      "React",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "Docker",
      "Codex",
    ],
    links: [
      {
        label: "Live Demo",
        "label-de": "Live-Demo",
        href: "https://flight-tracker-client.vercel.app/",
      },
    ],
  },
  {
    title: "eAutoKauf",
    slug: "eautokauf",
    image: "eautokauf.png",
    description:
      "A full-stack electric vehicle marketplace with advanced search, URL-synced filtering, authentication, listing management, saved searches, image uploads, and structured EV-specific vehicle data.",
    "description-de":
      "Ein Full-Stack-Marktplatz für Elektrofahrzeuge mit erweiterter Suche, URL-synchronisierten Filtern, Authentifizierung, Listing-Verwaltung, gespeicherten Suchen, Bild-Uploads und strukturierten EV-spezifischen Fahrzeugdaten.",
    highlights: [
      "Built a full-stack EV marketplace with Next.js, React, and TypeScript, including URL-synced advanced search, dynamic vehicle filtering, authenticated dashboards, and complex listing forms with Zod-based validation.",
      "Developed the backend with Django REST Framework, PostgreSQL, and Redis, implementing JWT authentication, email verification, password recovery, saved-search notifications, ImageKit uploads, listing review workflows, and price history.",
      "Designed structured EV data flows covering battery, range, charging, warranty, condition, and vehicle status, with server-side validation and protected ownership-based listing management.",
    ],
    "highlights-de": [
      "Full-Stack-EV-Marktplatz mit Next.js, React und TypeScript entwickelt, mit URL-synchronisierter erweiterter Suche, dynamischen Fahrzeugfiltern, authentifizierten Dashboards und komplexen Inseratsformularen mit Zod-basierter Validierung.",
      "Backend mit Django REST Framework, PostgreSQL und Redis entwickelt, inklusive JWT-Authentifizierung, E-Mail-Verifizierung, Passwort-Wiederherstellung, Saved-Search-Benachrichtigungen, ImageKit-Uploads, Inseratsprüfung und Preisverlauf.",
      "Strukturierte EV-Datenflüsse für Batterie, Reichweite, Laden, Garantie, Zustand und Fahrzeugstatus umgesetzt, inklusive serverseitiger Validierung und geschützter besitzbasierter Inseratsverwaltung.",
    ],
    stack: [
      "TypeScript",
      "Python",
      "Next.js",
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "WebSockets",
      "JWT",
      "Zod",
      "React Hook Form",
      "Tailwind CSS",
      "ImageKit",
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
