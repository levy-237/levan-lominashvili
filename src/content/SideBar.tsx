import { contact, type ContactLink } from "../data/contact";
import { navItems, ui } from "../data/ui";
import type { Language } from "../utils/language";
import { localized } from "../utils/localize";

const socialItems: ContactLink[] = [
  ...contact.links,
  {
    label: "Email",
    "label-de": ui["email-de"],
    href: `mailto:${contact.email}`,
  },
];

type SideBarProps = {
  language: Language;
  activeSection: string;
};

export default function SideBar({ language, activeSection }: SideBarProps) {
  return (
    <nav className="flex w-full flex-col gap-8 lg:sticky lg:top-0 lg:h-screen lg:w-[38%] lg:max-w-md lg:justify-between lg:gap-0 lg:py-24">
      <header className="space-y-3 pr-16 lg:pr-0">
        <h1 className="text-[1.5rem] font-medium leading-tight tracking-tight text-[var(--text-primary)] lg:text-[1.75rem]">
          Levan Lominashvili
        </h1>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-subtle)]">
          {localized(language, ui, "role")}
        </p>
      </header>

      <ul className="flex flex-row flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link text-sm${isActive ? " active" : ""}`}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="nav-link-line" aria-hidden="true" />
                <span className="nav-link-label">
                  {localized(language, item, "label")}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <footer className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {socialItems.map((item) =>
          item.href.startsWith("http") ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-xs uppercase tracking-[0.16em]"
            >
              {localized(language, item, "label")}
            </a>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="social-link text-xs uppercase tracking-[0.16em]"
            >
              {localized(language, item, "label")}
            </a>
          ),
        )}
      </footer>
    </nav>
  );
}
