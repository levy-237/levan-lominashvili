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
    <nav className="sticky top-0 flex h-screen w-[38%] max-w-md flex-col justify-between py-24">
      <header className="space-y-3">
        <h1 className="text-[1.75rem] font-medium leading-tight tracking-tight text-[var(--text-primary)]">
          Levan Lominashvili
        </h1>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-subtle)]">
          {localized(language, ui, "role")}
        </p>
      </header>

      <ul className="flex flex-col gap-4">
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

      <footer className="flex items-center gap-5">
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
